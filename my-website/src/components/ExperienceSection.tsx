import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const ExperienceContainer = styled.section`
  background-color: #333;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExperienceTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background-color: #2196f3;
    margin: 0 auto;
  }
`;

const ExperienceCard = styled.div`
  background-color: #404040;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 70%; /* Increase width */
  max-width: 500px; /* Increase max-width */
  margin-bottom: 1.5rem;
  text-align: center;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CompanyLogo = styled.img`
  height: 4rem; /* You can set the size to fit your design */
  margin-bottom: 0.5rem;
`;

const PositionTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.25rem; // Reduced space below position title
`;

const Location = styled.p`
  color: #ccc;
  font-style: italic;
  margin-bottom: 0.25rem; // Reduced space below location
`;

const TimeFrame = styled.p`
  color: #2196f3;
  margin-bottom: 0.5rem; // Adjusted space below time frame
`;

const Description = styled.p`
  color: white;
  font-size: 1rem;
  margin-top: 0; // Remove space above description if needed
`;

const experiences = [
    {
      companyLogoUrl: "https://www.mpi-sws.org/wp-content/themes/mpi-sws/assets/images/mpi-sws-logo.svg?ver=1.8.2",
      companyUrl: "https://www.mpi-sws.org/",
      positionTitle: 'Research Intern',
      location: 'Saarbrücken, Germany',
      timeFrame: 'March 2023 - May 2024',
      description: 'As part of the Satellite Data Augmentation Project, I built data pipelines, utilized large language models for data augmentation, and developed the front-end for this project.',
      key:'mpi-sws'
    },
    {
      companyLogoUrl: "https://www.searce.com/assets/images/logo.svg",
      companyUrl: "https://www.searce.com/",
      positionTitle: 'Data Enginner Intern',
      location: 'Pune, India',
      timeFrame: 'Jan 2023 - June 2023',
      description: 'I automated data migration pipelines to facilitate seamless data transfer between various cloud servers, including Google BigQuery, AWS RDS, Teradata, and Spanner.',
      key:'searce'
    },
    {
      companyLogoUrl: "https://nirmawebsite.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/06/216X92.png",
      companyUrl: "https://sudeeptanwar.in/",
      positionTitle: 'Research Intern',
      location: 'Ahmedabad, India',
      timeFrame: 'Sep 2021 - Jan 2023',
      description: 'I leveraged reinforcement learning and deep learning techniques to optimize energy trading algorithms and enhance safety in electric vehicles.',
      key:'st-labs'
    },
  ];
    

  const ExperienceSection = () => {
    return (
      <ExperienceContainer id = "experience">
        <ExperienceTitle>Experience</ExperienceTitle>
        {experiences.map(exp => (
          <ExperienceCard key={exp.key}>
            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
              <CompanyLogo src={exp.companyLogoUrl} alt={exp.positionTitle} />
            </a>
            <PositionTitle>{exp.positionTitle}</PositionTitle>
            <Location>{exp.location}</Location>
            <TimeFrame>{exp.timeFrame}</TimeFrame>
            <Description>
              {exp.description}
            </Description>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    );
}

export default ExperienceSection;