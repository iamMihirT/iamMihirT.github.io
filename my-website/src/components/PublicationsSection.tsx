import React from 'react';
import styled from 'styled-components';

// Styled components
const PublicationsContainer = styled.section`
  padding: 4rem 0;
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
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const PaperImage = styled.img`
  width: 150px; // Adjust size accordingly
  height: auto;
  margin-right: 2rem;
`;

const PaperDetails = styled.div`
  text-align: left;
`;

const PaperTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
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
  background-color: #2196f3;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #1976d2;
  }
`;

// Mock data
const publications = [
  {
    imageUrl: "path-to-your-paper-image.jpg",
    title: "Still Working",
    conference: "Mars",
    authors: "Mihir, Elbert, Issac",
    paperUrl: "link-to-your-paper"
  },
  // ...more publications
];

const PublicationsSection = () => {
  return (
    <PublicationsContainer>
      <PublicationTitle>Publications</PublicationTitle>
      {publications.map((paper, index) => (
        <PaperCard key={index}>
          <PaperImage src={paper.imageUrl} alt={paper.title} />
          <PaperDetails>
            <PaperTitle>{paper.title}</PaperTitle>
            <Conference>{paper.conference}</Conference>
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
