import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

// Style for the social links container
const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // This sets the spacing between the icons
  // Add more styling as needed
`;

// Style for each social link
const SocialLink = styled.a`
  color: #fff; // Use the color you prefer
  transition: color 0.3s ease;
  &:hover {
    color: #0077b5; // Example hover color for LinkedIn, customize as needed
  }
  // Add more styling as needed
`;

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <SocialLink href="https://www.linkedin.com/in/mtrivedi16/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </SocialLink>
      <SocialLink href="https://github.com/iamMihirT/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </SocialLink>
      <SocialLink href="https://twitter.com/MihirT002" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </SocialLink>
      <SocialLink href="https://scholar.google.com/citations?user=cjfnB_YAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGraduationCap} size="2x" />
      </SocialLink>
      {/* Add more social links as needed */}
    </SocialLinksContainer>
  );
};

export default SocialLinks;