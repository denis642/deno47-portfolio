import React from 'react';
import './Interests.css';
import { FaRobot, FaPaintBrush, FaCode, FaVideo, FaProjectDiagram, FaCube, FaChartBar, FaDatabase } from 'react-icons/fa';

const interests = [
  {
    title: 'AI & ML',
    icon: <FaRobot />,
    description: 'I explore intelligent systems that learn and make decisions autonomously.',
  },
  {
    title: 'API Integrations',
    icon: <FaProjectDiagram />,
    description: 'I enjoy connecting systems and services to build seamless applications.',
  },
  {
    title: 'Blockchain',
    icon: <FaCube />,
    description: 'Fascinated by decentralized technologies and their real-world impact.',
  },
  {
    title: 'Software Development',
    icon: <FaCode />,
    description: 'Building scalable and maintainable software is my daily passion.',
  },
  {
    title: 'Video Editing',
    icon: <FaVideo />,
    description: 'Crafting visual stories and editing content is a creative outlet for me.',
  },
  {
    title: 'Graphics Design',
    icon: <FaPaintBrush />,
    description: 'Designing compelling visuals and clean interfaces is something I love.',
  },
  {
    title: 'Data Analysis',
    icon: <FaDatabase />,
    description: 'I love uncovering insights from data and making data-driven decisions.',
  },
  {
    title: 'Data Visualization',
    icon: <FaChartBar />,
    description: 'Turning data into visuals that tell a compelling story excites me.',
  },
];


const Interests = () => {
  return (
    <div className="interests-section" id="interests">
      <h2>My Interests</h2>
      <div className="interests-grid">
        {interests.map((item, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="interest-icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
