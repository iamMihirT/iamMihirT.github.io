import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCircle } from '@fortawesome/free-solid-svg-icons';

const InterestsEducationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 2rem;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-family: 'Raleway', sans-serif;
  text-align: left;
  position: relative;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem; // Add padding to create space for the underline

  &:after {
    content: '';
    display: block;
    width: 40%;
    height: 3px;
    background-color: rgb(33, 150, 243);
    margin: 0 auto; // Center the underline horizontally
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  color: black;
  margin-bottom: 0.5rem;
  align-self: flex-start;
  width: 100%;
`;

const Bullet = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: black;
`;

const Degree = styled.div`
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0.5rem;
`;

const InterestsEducationSection = () => {
  return (
    <InterestsEducationContainer>
      <Column>
        <Title>Interests</Title>
        <List>
          <ListItem>
            <Bullet icon={faCircle} size="sm" />
            Reinforcement Learning
          </ListItem>
          <ListItem>
            <Bullet icon={faCircle} size="sm" />
            Computer Vision
          </ListItem>
          <ListItem>
            <Bullet icon={faCircle} size="sm" />
            Sequential Decision Making
          </ListItem>
          <ListItem>
            <Bullet icon={faCircle} size="sm" />
            Autonomous Vehicles
          </ListItem>
        </List>
      </Column>
      <Column>
        <Title>Education</Title>
        <List>
          <ListItem>
            <FontAwesomeIcon icon={faGraduationCap} /> MS in Electrical Engineering, AI track, 2026
            <Degree>Columbia University</Degree>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faGraduationCap} /> BTech in Electrical Engineering with a Minor in Computer science, 2023
            <Degree>Nirma University</Degree>
          </ListItem>
        </List>
      </Column>
    </InterestsEducationContainer>
  );
};

export default InterestsEducationSection;