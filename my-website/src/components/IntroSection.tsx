import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.section`
  background: #fff; // White background for the intro section
  padding: 50px 20px; // Adjust the padding as necessary
  font-family: 'Open Sans', sans-serif; // Assuming you're using Open Sans for the text
`;

const IntroTitle = styled.h2`
  font-size: 3em; // Larger size for the intro title
  text-align: center; // Center align the title
  margin-bottom: 1em; // More space below the title
  font-family: 'Raleway', sans-serif; // Raleway font for the title
  color: #212121; // Darker color for the text, if needed
  position: relative; // For the underline

  &:after {
    content: '';
    width: 50px; // Width of the underline
    height: 4px; // Thickness of the underline
    background-color: rgb(33, 150, 243); // Blue color for the underline
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
  }
`;

const IntroText = styled.p`
  color: #333; // Dark grey color for the text
  font-size: 1.25em; // Increased font size for the text
  line-height: 1.6; // Line height for readability
  max-width: 1000px; // Adjusted max-width for less left and right space
  margin: 2em auto; // Increased top margin to add gap between title and text
`;

const Link = styled.a`
  color: rgb(33, 150, 243); // Blue color for links
  text-decoration: none; // No underline by default

  &:hover, &:focus {
    text-decoration: underline; // Underline on hover or focus for better accessibility
  }
`;

const IntroSection = () => {
    return (
      <IntroContainer id = "intro">
        <IntroTitle>Intro</IntroTitle>
        <IntroText>
          Hi, I'm Mihir, a second-year master's student in Electrical Engineering with a specialization in Data Driven Analysis and Computation at Columbia University. I work at the intersection of machine learning, production systems, and real-world applications, with particular focus on financial markets, natural language processing, and computer vision.
          <br /><br />
          This summer, I'm working as a Quant Researcher at a sports betting platform, developing predictive models and discovering alpha in sports markets. My research interests span Generative AI, Reinforcement Learning, and their applications to complex decision-making problems across finance, infrastructure, and data-intensive domains.
          <br /><br />
          During Spring 2025, I served as AI Lead at a Columbia-based FinAI startup, building a team to develop an automated tax filing system using LLMs and document understanding. I'm also conducting research on LLM applications for privacy policy analysis, benchmarking GPT-4o, DeepSeek, and Mistral across RAG pipelines, and investigating model quantization techniques to optimize deployment efficiency.
          <br /><br />
          Previously, I worked as a Software Research Engineer at the Max Planck Institute for Software Systems with <Link href="https://binds.ch/" target="_blank" rel="noopener noreferrer">Dr. Laurent Bindschaedler</Link>, developing dynamic data pipelines for satellite image augmentation using Vision Transformers and building LLM-based querying systems for geospatial data.
          <br /><br />
          During my undergraduate studies, I worked with <Link href="https://sudeeptanwar.in/" target="_blank" rel="noopener noreferrer">Dr. Sudeep Tanwar</Link> on reinforcement learning algorithms for energy trading systems and electric vehicles, resulting in two published papers with over 70 citations in peer-reviewed journals.
          <br /><br />
          My long-term goal is to build production AI systems that solve high-stakes problems where accuracy, reliability, and scalability matter. Whether that's developing systematic trading strategies, optimizing infrastructure systems, or deploying large language models at scale, I'm drawn to applications where machine learning creates measurable, real-world impact.
          <br /><br />
          If you're interested in discussing machine learning applications, quantitative finance, systematic trading, or AI infrastructure, feel free to reach out!
        </IntroText>
      </IntroContainer>
    );
  };
  

export default IntroSection;
