// src/App.tsx or wherever your main layout is
import React from 'react';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import InterestsEducationSection from './components/InterestsEducationSection';
import ExperienceSection from './components/ExperienceSection';
import PublicationsSection from './components/PublicationsSection';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import BurgerMenu from './components/BurgerMenu';
const TopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent; // Transparent background
  border: none;
  cursor: pointer;
  z-index: 1000;
  padding: 10px;
  border-radius: 50%; // Circle shape
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  transition: background-color 0.2s ease-in-out; // Smooth transition for background color

  &:hover {
    background-color: rgba(0,0,0,0.1); // Slight darkness on hover
  }

  &:focus {
    outline: none;
  }
`;

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll
  });
};


function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <BurgerMenu/>
      <HeroSection />
      <IntroSection />
      <InterestsEducationSection />
      <ExperienceSection />
      <PublicationsSection />
      <TopButton onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
      </TopButton>
      {/* Add more sections or footer as needed */}
    </>
  );
}

export default App;
