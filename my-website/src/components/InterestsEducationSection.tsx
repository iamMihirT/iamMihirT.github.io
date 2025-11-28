import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const SectionContainer = styled.section`
  background-color: #fff;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  color: #212121;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  &:after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background-color: #2196f3;
    margin: 0.5rem auto 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Column = styled.div``;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 1.5rem;
  color: #333;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #2196f3;
  display: inline-block;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InterestItem = styled.li`
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.75rem;
  padding-left: 1.25rem;
  position: relative;
  line-height: 1.5;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #000;
    font-size: 1.4rem;
    line-height: 1.1;
  }
`;

const EducationItem = styled.li`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;

  & > svg {
    margin-right: 0.75rem;
    margin-top: 0.2rem;
    color: #2196f3;
    flex-shrink: 0;
  }
`;

const University = styled.div`
  color: #666;
  font-size: 0.95rem;
  margin-left: 1.75rem;
  margin-top: 0.25rem;
`;

const interests = [
  'Quantitative Finance & Algorithmic Trading',
  'Machine Learning',
  'Mathematical Modeling & Statistical Analysis',
  'Financial Data Engineering & Infrastructure',
  'Reinforcement Learning',
];

const InterestsEducationSection: React.FC = () => (
  <SectionContainer>
    <SectionTitle>Background</SectionTitle>
    <Container>
      <Column>
        <CardTitle>Interests</CardTitle>
        <List>
          {interests.map((text) => (
            <InterestItem key={text}>{text}</InterestItem>
          ))}
        </List>
      </Column>

      <Column>
        <CardTitle>Education</CardTitle>
        <List>
          <EducationItem>
            <EducationHeader>
              <FontAwesomeIcon icon={faGraduationCap} />
              MS in Electrical Engineering, Machine Learning Track, Dec 2025
            </EducationHeader>
            <University>Columbia University</University>
          </EducationItem>

          <EducationItem>
            <EducationHeader>
              <FontAwesomeIcon icon={faGraduationCap} />
              BTech in Electrical Engineering, Minor in Computer Science, 2023
            </EducationHeader>
            <University>Nirma University</University>
          </EducationItem>
        </List>
      </Column>
    </Container>
  </SectionContainer>
);

export default InterestsEducationSection;
