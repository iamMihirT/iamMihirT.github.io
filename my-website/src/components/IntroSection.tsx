import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.section`
  background: #fff; // White background for the intro section
  padding: 50px 20px; // Adjust the padding as necessary
  font-family: 'Open Sans', sans-serif; // Assuming you're using Open Sans for the text
`;

const IntroTitle = styled.h2`
  font-size: 3em; // Larger size for the intro title
  text-align: center; // Center align the title
  margin-bottom: 1em; // More space below the title
  font-family: 'Raleway', sans-serif; // Raleway font for the title
  color: #212121; // Darker color for the text, if needed
  position: relative; // For the underline

  &:after {
    content: '';
    width: 50px; // Width of the underline
    height: 4px; // Thickness of the underline
    background-color: rgb(33, 150, 243); // Blue color for the underline
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
  }
`;

const IntroText = styled.p`
  color: #333; // Dark grey color for the text
  font-size: 1.25em; // Increased font size for the text
  line-height: 1.6; // Line height for readability
  max-width: 1000px; // Adjusted max-width for less left and right space
  margin: 2em auto; // Increased top margin to add gap between title and text
`;

const Link = styled.a`
  color: rgb(33, 150, 243); // Blue color for links
  text-decoration: none; // No underline by default

  &:hover, &:focus {
    text-decoration: underline; // Underline on hover or focus for better accessibility
  }
`;

const IntroSection = () => {
    return (
      <IntroContainer>
        <IntroTitle>Intro</IntroTitle>
        <IntroText>
          Hi, I am Mihir, a first-year master's student in Electrical Engineering (AI Track) at Columbia University.
          <br /><br />
          My primary research interests lie in Reinforcement Learning, Natural Language Processing, and Control. Through my research, I aim to apply and optimize state-of-the-art algorithms and methods for specific niche areas, creating practical impact. My long-term goal is to work on optimizing large systems, such as trading platforms, leveraging my knowledge in these areas.
          <br /><br />
          Currently, I am working as a Research Fellow at the Max Planck Institute for Software Systems with <Link href="https://binds.ch/" target="_blank" rel="noopener noreferrer">Dr. Laurent Bindschaedler</Link> on the augmentation of satellite images.
          <br /><br />
          During my undergraduate studies, I had the opportunity to work with <Link href="https://sudeeptanwar.in/" target="_blank" rel="noopener noreferrer">Dr. Sudeep Tanwar</Link> on topics including reinforcement learning, energy trading algorithms, and electric vehicles.
          <br /><br />
          If you're interested in my work or would like to discuss any shared technical interests, feel free to get in touch!
        </IntroText>
      </IntroContainer>
    );
  };
  

export default IntroSection;
