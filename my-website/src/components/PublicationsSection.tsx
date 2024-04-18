import React from 'react';
import styled from 'styled-components';

// Styled components
const PublicationsContainer = styled.section`
  padding: 4rem 0;
  display: flex; // Use flexbox for center alignment
  flex-direction: column;
  align-items: center; // Center the children horizontally
`;

const PublicationTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  &:after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background-color: #2196f3;
    margin: 0 auto;
  }
`;

const PaperCard = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 300px) 1fr;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%; // Take the full width of the parent
  max-width: 800px; // Set a max-width for the entire card
  box-sizing: border-box; // Include padding and border in the element's total width and height
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }
`;

const PaperImage = styled.img`
  width: 100%;
  max-width: 300px; // Ensure the image does not exceed this width
  height: auto;
  border: 3px solid #888888;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;


const PaperDetails = styled.div`
  text-align: left;
`;

const PaperTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #2196f3; // Blue color for the paper title
`;

const Conference = styled.p`
  margin-bottom: 0.5rem;
`;

const Authors = styled.p`
  margin-bottom: 1rem;
  font-style: italic;
`;

const PaperButton = styled.a`
  display: inline-block;
  background-color: transparent; // Transparent background
  color: 2196e3; // Blue text color
  padding: 10px 15px;
  border: 1px solid #2196f3; // Blue border
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #2196f3; // Blue background on hover
    color: white; // White text on hover
  }
`;

// Mock data
const publications = [
  {
    imageUrl: "https://www.mdpi.com/mathematics/mathematics-10-03626/article_deploy/html/images/mathematics-10-03626-g002-550.jpg",
    title: "Blockchain and Deep Learning-Based Fault Detection Framework for Electric Vehicles",
    journal: "Mathematics, MDPI 2022",
    authors: "Mihir Trivedi, Riya Kakkar, Rajesh Gupta, Sudeep Tanwar",
    paperUrl: "https://www.mdpi.com/2227-7390/10/19/3626"
  },
  {
    imageUrl: "https://static.hindawi.com/articles/itees/volume-2022/9761157/figures/9761157.fig.001.jpg",
    title: "SV2G-ET: A Secure Vehicle-to-Grid Energy Trading Scheme Using Deep Reinforcement Learning",
    journal: "International Transactions on Electrical Energy Systems, Wiley 2022",
    authors: "Aparna Kumari, Mihir Trivedi, Sudeep Tanwar",
    paperUrl: "https://www.hindawi.com/journals/itees/2022/9761157/"
  },
];

const PublicationsSection = () => {
  return (
    <PublicationsContainer id = "publications">
      <PublicationTitle>Publications</PublicationTitle>
      {publications.map((paper, index) => (
        <PaperCard key={index}>
          <PaperImage src={paper.imageUrl} alt={paper.title} />
          <PaperDetails>
            <PaperTitle>{paper.title}</PaperTitle>
            <Conference>{paper.journal}</Conference>
            <Authors>{paper.authors}</Authors>
            <PaperButton href={paper.paperUrl} target="_blank" rel="noopener noreferrer">
              View Paper
            </PaperButton>
          </PaperDetails>
        </PaperCard>
      ))}
    </PublicationsContainer>
  );
};

export default PublicationsSection;


