import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DynamicText = styled.span`
  color: white; // Adjust text color
  border-bottom: 2px solid #0077b5; // Light blue underline
`;

interface TypingProps {
  words: string[];
  loop?: boolean;
  typeSpeed?: number; // Delay in ms before typing each character
  deleteSpeed?: number; // Delay in ms before deleting each character
  delayBetweenWords?: number; // Delay in ms between words
}

const TypingEffect: React.FC<TypingProps> = ({
  words,
  loop = true,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 1000
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Handle typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      setBlink(false);
      setTimeout(() => setBlink(true), delayBetweenWords);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <DynamicText>
      {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </DynamicText>
  );
};

export default TypingEffect;
