import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'; // Import the Link component from react-scroll

const BurgerMenuContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000; // Ensure it's above other elements
`;

const BurgerIcon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(128, 128, 128, 0.5); // Light black, transparent background
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1010;

  svg {
    color: white; // Icon color
    transition: transform 0.3s ease; // Smooth transition for icon change
  }

  &:hover {
    background: rgba(128, 128, 128, 0.7); // Darken on hover for better visibility
  }

`;

const Menu = styled.nav<{isOpen: boolean}>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  padding-top: 60px;
  z-index: 1000;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <BurgerMenuContainer>
        <BurgerIcon onClick={toggleMenu}>
          {!isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          )}
        </BurgerIcon>
        <Menu isOpen={isOpen}>
          <StyledLink to="home" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Home</StyledLink>
          <StyledLink to="intro" spy={true} smooth={true} duration={500} onClick={toggleMenu}>About</StyledLink>
          <StyledLink to="experience" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Experience</StyledLink>
          <StyledLink to="projects" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Projects</StyledLink>
          <StyledLink to="publications" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Publications</StyledLink>
        </Menu>
      </BurgerMenuContainer>
    );
};

export default BurgerMenu;
