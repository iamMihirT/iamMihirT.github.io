import React from 'react';
import styled from 'styled-components';
import asteraLogo from '../assets/astera_logo.png';
import mpiswsLogo from '../assets/mpisws_logo.png';
import searceLogo from '../assets/searce_logo.png';

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

const CompanyLogo = styled.img<{ $invert?: boolean }>`
  height: 4rem;
  margin-bottom: 0.5rem;
  ${({ $invert }) => $invert && `filter: invert(1) brightness(2);`}
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

const DescriptionList = styled.ul`
  color: white;
  font-size: 1rem;
  margin-top: 0;
  text-align: left;
  padding-left: 1.2rem;
  list-style-type: disc;

  li {
    margin-bottom: 0.4rem;
  }
`;

const experiences = [
    {
      companyLogoUrl: asteraLogo,
      companyUrl: "https://www.astera.holdings/",
      positionTitle: 'Quantitative Researcher Intern',
      location: 'New York, NY',
      timeFrame: 'Jun 2025 – Sep 2025',
      description: [
        'Built a low-latency ingestion engine consolidating 50+ liquidity sources with sub-2s latency and strict point-in-time alignment to prevent look-ahead bias.',
        'Developed statistical arbitrage strategies across sports and digital asset markets using an inverse-error weighted consensus model.',
        'Productionized an event-driven execution system with Kelly-criterion sizing and fault-tolerant Kafka routing, targeting strategies with 2%+ expected value.',
      ],
      key:'astera'
    },
    {
      companyLogoUrl: mpiswsLogo,
      companyUrl: "https://www.mpi-sws.org/",
      positionTitle: 'Software Research Engineer',
      location: 'Saarbrücken, Germany',
      timeFrame: 'Jun 2023 – Jun 2024',
      description: [
        'Architected low-latency Python pipelines for Skypulse, a satellite data augmentation platform ingesting real-time satellite imagery, social media, and webcam streams for event detection.',
        'Built a Vision Transformer model achieving 96% accuracy for event extraction, feeding a real-time natural language querying system.',
        'Deployed production ML workflows using Kubeflow and Docker, and automated geospatial data cleaning with OpenCV and Geopy.',
      ],
      key:'mpi-sws'
    },
    {
      companyLogoUrl: searceLogo,
      companyUrl: "https://www.searce.com/",
      positionTitle: 'Data Engineer Intern',
      location: 'Pune, India',
      timeFrame: 'Jan 2023 – Jun 2023',
      description: [
        'Engineered generic data accelerators for Teradata-to-BigQuery, AWS RDS-to-BigQuery, and Postgres-to-Spanner migrations, reducing manual effort by 80%.',
        'Implemented multithreaded Python pipelines that increased data transfer throughput by 5x, cutting migration timelines from weeks to days.',
        'Built automated validation frameworks covering row counts, checksums, and reconciliation, reducing post-migration discrepancies by 70%.',
      ],
      invertLogo: true,
      key:'searce'
    },
    {
      companyLogoUrl: "https://nirmawebsite.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/06/216X92.png",
      companyUrl: "https://sudeeptanwar.in/",
      positionTitle: 'Research Intern',
      location: 'Ahmedabad, India',
      timeFrame: 'Sep 2021 – Jan 2023',
      description: [
        'Leveraged reinforcement learning and deep learning techniques to optimize energy trading algorithms and enhance safety in electric vehicles.',
      ],
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
              <CompanyLogo src={exp.companyLogoUrl} alt={exp.positionTitle} $invert={exp.invertLogo} />
            </a>
            <PositionTitle>{exp.positionTitle}</PositionTitle>
            <Location>{exp.location}</Location>
            <TimeFrame>{exp.timeFrame}</TimeFrame>
            <DescriptionList>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </DescriptionList>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    );
}

export default ExperienceSection;