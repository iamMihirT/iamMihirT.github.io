import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SocialLinks from './SocialLinks';
import linkedin_profile_pic from '../assets/linkedin_profile_pic.jpeg';
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
  background-attachment: fixed; // This ensures the background stays fixed during scroll
  background-size: cover;
  background-position: center;
  height: 100vh; // This ensures that the hero container takes up the full viewport height
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative; // Child elements can be absolutely positioned relative to this
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 200px; /* Adjust as necessary */
  height: 200px; /* Maintain aspect ratio */
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
  font-size: 1.48rem; /* Adjust size for the typing animation */
  margin-bottom: 2rem; /* Space below the typing animation */
  display: flex;
  align-items: center;
  min-width: 300px; /* Set a fixed width large enough to hold the longest string */
  justify-content: center; /* Center the content */
  min-height: 2.1rem;
`;

const StaticText = styled.span`
  color: white;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const IntroSection = styled.section`
  background-color: white; // Assuming the intro has a white background
  padding: 50px; // Adjust padding to match your design
  // Add additional styling to match the screenshot
`;

const SectionTitle = styled.h2`
  font-size: 2rem; // Adjust to match your design
  text-align: center;
  margin-bottom: 30px;
  // Add additional styling to match the screenshot
`;

// Example styling for news items
const NewsItem = styled.div`
  margin-bottom: 15px;
  // Add additional styling to match the screenshot
`;

const HeroSection = () => (
    <>
      <GlobalStyle />
      <HeroContainer id = "home">
        <ProfileImage src={linkedin_profile_pic} alt="Mihir Trivedi" />
        <Name>Mihir Trivedi</Name>
        <Email>mpt2142 [at] columbia [dot] edu</Email>
        <TypingContainer>
          <StaticText>I'm a</StaticText>
          <TypingEffect words={['Researcher', 'Coder', 'Quant']} />
        </TypingContainer>
        <SocialLinks />
      </HeroContainer>
    </>
);

export default HeroSection;