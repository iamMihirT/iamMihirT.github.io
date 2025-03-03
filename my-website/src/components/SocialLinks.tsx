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
const CVLink = styled(SocialLink)`
  font-weight: bold; // Makes the text bold
  font-size: 1.5em; // Sets the font size to match the icons
  display: flex; // Aligns the text properly with icons
  align-items: center; // Centers the text with icons vertically
  justify-content: center; // Centers the text horizontally (if the element has a set width)
  height: 1.5rem; // Matches the height of the FontAwesome icons
  line-height: 1; // Adjust line height to match the icons
  padding: 0.1rem 0.05rem; // Add padding to create a similar shape to the icons
`;

// Adjust the SocialLink component if necessary to ensure uniformity
const IconLink = styled(SocialLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;


const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <IconLink href="https://www.linkedin.com/in/mtrivedi16/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </IconLink>
      <IconLink href="https://github.com/iamMihirT/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </IconLink>
      <IconLink href="https://twitter.com/MihirT002" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </IconLink>
      <CVLink href="https://drive.google.com/file/d/1PLWeGlkgrXupLse_jl4DLUfkjd9e64ya/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        CV
      </CVLink>
      {/* Add more social links as needed */}
    </SocialLinksContainer>
  );
};


export default SocialLinks;
