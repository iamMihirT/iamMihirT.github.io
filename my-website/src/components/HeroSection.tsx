import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SocialLinks from './SocialLinks';
import profile_pic from '../assets/profile_pic.jpeg';
import TypingEffect from './TypingEffect';

// Global styles
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent horizontal scroll */
  }
  /* Add other global styles here */
`;

const HeroContainer = styled.div`
  background-image: url('https://wallpapers.com/images/featured/new-york-city-5oaa14h4mw6w3o71.jpg');
  height: 100vh;
  background-size: cover;
  background-position: center; /* Ensure the background image is centered */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative; /* Needed for absolute positioning of elements inside */
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px; /* Adjust as necessary */
  height: 150px; /* Maintain aspect ratio */
  border: 5px solid white; /* White border around the image */
  margin-bottom: 1rem; /* Space below the image */
`;

const Name = styled.h1`
  font-size: 3rem; /* Large text for the name */
  color: white; /* Text color */
  margin: 0.5rem 0; /* Spacing */
`;

const Email = styled.p`
  font-size: 1.5rem;
  color: white; /* Text color */
  margin: 0.5rem 0 2rem 0; /* Spacing */
`;

const TypingContainer = styled.div`
  color: white; /* Text color */
  font-size: 1.5rem; /* Adjust size for the typing animation */
  margin-bottom: 2rem; /* Space below the typing animation */
  display: flex;
  align-items: baseline;
  width: 300px; /* Set a fixed width large enough to hold the longest string */
  justify-content: center; /* Center the content */
`;

const StaticText = styled.span`
  color: white;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

// Assuming you already have a SocialLinks styled component
// Otherwise, you can add more styling as needed

const HeroSection = () => (
    <>
      <GlobalStyle />
      <HeroContainer>
        <ProfileImage src={profile_pic} alt="Mihir Trivedi" />
        <Name>Mihir Trivedi</Name>
        <Email>mtrivedi@mpi-sws.org</Email>
        <TypingContainer>
          <StaticText>I'm a</StaticText>
          <TypingEffect words={['Researcher', 'Coder', 'Engineer']} />
        </TypingContainer>
        <SocialLinks />
      </HeroContainer>
    </>
);

export default HeroSection;
