import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import rlProjectImg from '../assets/rl_project.png';
import llmQuantImg from '../assets/llm_quantization.png';
import kanImg from '../assets/kan.png';
import cryptoImg from '../assets/crypto.png';
import eecsImg from '../assets/eecs.png';

const ProjectsContainer = styled.section`
  background-color: #fff;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsTitle = styled.h2`
  color: #212121;
  font-size: 2.5rem;
  margin-bottom: 2rem;
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

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 300px) 1fr;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border: 3px solid #ddd;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ProjectDetails = styled.div`
  text-align: left;
`;

const ProjectName = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #2196f3;
  font-size: 1.2rem;
`;

const ProjectTech = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

const ProjectDate = styled.p`
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
  font-style: italic;
`;

const ProjectDescription = styled.p`
  color: #444;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 8px 12px;
  background-color: transparent;
  color: #2196f3;
  border: 1px solid #2196f3;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #2196f3;
    color: white;
  }
  
  svg {
    font-size: 0.9rem;
  }
`;

const NoLinkBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  background-color: rgba(136, 136, 136, 0.1);
  color: #888;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.85rem;
  font-style: italic;
`;

const InProgressBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  background-color: rgba(255, 152, 0, 0.1);
  color: #f57c00;
  border: 1px solid #ff9800;
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: 500;
`;

// Project data
const projects = [
  {
    name: "Ensemble Deep Reinforcement Learning for Portfolio Optimization",
    tech: "Python, TensorFlow, LLM",
    date: "Mar 2025 – May 2025",
    description: "Constructed ensemble DRL framework (PPO, DDPG, A2C) achieving 3.12 Sharpe ratio for automated portfolio management. Integrated LLM sentiment analysis using DeepSeek with financial data, improving performance during market volatility by 15%.",
    imageUrl: rlProjectImg,
    githubUrl: "https://github.com/iamMihirT/EECS6892-2025Spring-FinalProject-pvk2110-mpt2142",
    reportUrl: "https://drive.google.com/file/d/1bBoyAv454L5hoxJrsEbbEnUSLhLT6LCP/view?usp=drive_link",
    status: "complete"
  },
  {
    name: "BitNet-Quantized QLoRA for Efficient LLMs",
    tech: "PyTorch, CUDA, GCP, LLaMA-7B",
    date: "Apr 2025 – May 2025",
    description: "Architected BitNet+QLoRA for GPT-2 on CodeSearchNet; cutting VRAM to 4 GB, train time 71%, inference 91 ms. Implemented CUDA ternary matmul and bitpacking (8 weights/byte); achieved 0.34 GB footprint and sub-100 ms latency.",
    imageUrl: llmQuantImg,
    githubUrl: "https://github.com/iamMihirT/coms6995_mlcloud_llmbitquant",
    reportUrl: "https://drive.google.com/file/d/1HJPUf35qt9eSEmxhUW02lk2Qep67gRoG/view?usp=drive_link",
    status: "complete"
  },
  {
    name: "CryptoQAR: Quantile Autoregression for Digital Asset Volatility",
    tech: "Python, Time Series, Quantile Regression",
    date: "Nov 2024 – Mar 2025",
    description: "Designed Piecewise Quantile Vector Autoregression to capture distribution level causality across mean, volatility, and tail regions. P-QVAR revealed 6.5× more causal links than VAR, with Bitcoin as the main influencer across quantile networks.",
    imageUrl: cryptoImg,
    githubUrl: null,
    reportUrl: null,
    status: "in_progress"
  },
  {
    name: "Kolmogorov-Arnold Networks: Implementation and Applications",
    tech: "PyTorch, Deep Learning, Neural Networks",
    date: "Sep 2024 – Dec 2024",
    description: "Comprehensive exploration of neural network architectures including CNNs, RNNs, and Transformers. Implemented state-of-the-art models for computer vision and natural language processing tasks.",
    imageUrl: kanImg,
    githubUrl: "https://github.com/iamMihirT/E4040.2024Fall.kany.mpt2142.shk2195.hwd2109",
    reportUrl: "https://drive.google.com/file/d/1jrPU1_D8Gbvu7ADzbWJgdXQcAVg4wSyj/view?usp=drive_link",
    status: "complete"
  },
  {
    name: "Neural Tangent Kernel Analysis: ResNet vs Feedforward Generalization",
    tech: "Python, Machine Learning",
    date: "Feb 2025 – May 2025",
    description: "Analysis of generalization in deep networks through Neural Tangent Kernel framework, comparing residual and feedforward architectures.",
    imageUrl: eecsImg,
    githubUrl: "https://github.com/iamMihirT/Final_Project_EECS6699",
    reportUrl: "https://drive.google.com/file/d/1xJU9VIqrTcamk9aMSKUucBHOUMPUZNBl/view?usp=drive_link",
    status: "complete"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Selected Projects</ProjectsTitle>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectImage src={project.imageUrl} alt={project.name} />
          <ProjectDetails>
            <ProjectName>{project.name}</ProjectName>
            <ProjectTech>{project.tech}</ProjectTech>
            <ProjectDate>{project.date}</ProjectDate>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              {project.githubUrl && (
                <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                  GitHub
                </ProjectLink>
              )}
              {project.reportUrl && (
                <ProjectLink href={project.reportUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFileAlt} />
                  Report
                </ProjectLink>
              )}
              {!project.githubUrl && !project.reportUrl && project.status === "in_progress" && (
                <InProgressBadge>Writing Paper</InProgressBadge>
              )}
            </ProjectLinks>
          </ProjectDetails>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default ProjectsSection;
