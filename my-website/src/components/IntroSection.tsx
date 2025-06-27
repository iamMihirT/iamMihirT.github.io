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
        Hi, I'm Mihir, a second-year master's student in Electrical Engineering with a specialization in Data Driven Analysis and Computation at Columbia University. This summer, I'm working as a Quant Researcher at a sports betting platform, focusing on alpha discovery and developing predictive models for sports markets.
        <br /><br />
        My research interests center on Quantitative Finance, Reinforcement Learning and GenAI. I'm passionate about applying AI to financial markets—developing systematic trading strategies, risk management models, and alternative data analysis pipelines. My coursework in Quantitative Trading, Statistical Learning, and Generative AI has strengthened my foundation in mathematical finance.
          <br /><br />
          During Spring 2025, I serve as AI Lead at a Columbia-based FinAI startup, building a team to develop an automated tax filing system. I'm also conducting research on reinforcement learning applications for portfolio optimization using financial news sentiment.
          <br /><br />
          Previously, I worked as a Software Research Engineer at the Max Planck Institute for Software Systems with <Link href="https://binds.ch/" target="_blank" rel="noopener noreferrer">Dr. Laurent Bindschaedler</Link>, developing dynamic data pipelines for satellite image augmentation and building LLM-based querying systems.
          <br /><br />
          During my undergraduate studies, I had the opportunity to work with <Link href="https://sudeeptanwar.in/" target="_blank" rel="noopener noreferrer">Dr. Sudeep Tanwar</Link> on reinforcement learning algorithms for energy trading systems and electric vehicles, resulting in published research.
          <br /><br />
          My long-term goal is to become a quantitative researcher, leveraging machine learning and statistical methods to develop systematic trading strategies and optimize financial systems at scale.
          <br /><br />
          If you're interested in discussing quantitative finance, AI applications in trading, or alpha discovery, feel free to reach out!
        </IntroText>
      </IntroContainer>
    );
  };
  

export default IntroSection;
