import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCircle } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 800px;     
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 40%;
    height: 3px;
    background-color: rgb(33, 150, 243);
    margin-top: 0.25rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

/* ─── Interests ───────────────────────────────────────────────────────────── */

const InterestItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 0.75rem;

  & > svg {
    margin-right: 0.75rem;
  }
`;

/* ─── Education ───────────────────────────────────────────────────────────── */

const EducationItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #000;

  & > svg {
    margin-right: 0.75rem;
  }
`;

const Degree = styled.div`
  color: #000;
  font-size: 1.1rem;
  margin-left: 1.75rem;
  margin-top: 0.25rem;
`;

const InterestsEducationSection: React.FC = () => (
  <Container>
    <Column>
      <Title>Interests</Title>
      <List>
        {[
          'Quantitative Finance & Algorithmic Trading',
          'Machine Learning',
          'Mathematical Modeling & Statistical Analysis',
          'Financial Data Engineering & Infrastructure',
          'Reinforcement Learning',
        ].map((text) => (
          <InterestItem key={text}>
            <FontAwesomeIcon icon={faCircle} size="sm" />
            {text}
          </InterestItem>
        ))}
      </List>
    </Column>

    <Column>
      <Title>Education</Title>
      <List>
        <EducationItem>
          <EducationHeader>
            <FontAwesomeIcon icon={faGraduationCap} size="sm" />
            MS in Electrical Engineering, AI Track, Dec 2025
          </EducationHeader>
          <Degree>Columbia University</Degree>
        </EducationItem>

        <EducationItem>
          <EducationHeader>
            <FontAwesomeIcon icon={faGraduationCap} size="sm" />
            BTech in Electrical Engineering, Minor in Computer Science, 2023
          </EducationHeader>
          <Degree>Nirma University</Degree>
        </EducationItem>
      </List>
    </Column>
  </Container>
);

export default InterestsEducationSection;
