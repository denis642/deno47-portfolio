import React from 'react';
import './Skills.css';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGit, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiPostgresql, SiMysql, SiSupabase, SiTypescript, SiApachespark } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, percent: 90 },
  { name: 'CSS', icon: <FaCss3Alt />, percent: 85 },
  { name: 'JavaScript', icon: <FaJs />, percent: 88 },
  { name: 'React JS', icon: <FaReact />, percent: 80 },
  { name: 'Node JS', icon: <FaNodeJs />, percent: 75 },
  { name: 'Python', icon: <FaPython />, percent: 92 },
  { name: 'Django', icon: <SiDjango />, percent: 78 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, percent: 83 },
  { name: 'MySQL', icon: <SiMysql />, percent: 87 },
  { name: 'PostgreSQL', icon: <SiPostgresql />, percent: 82 },
  { name: 'SQL', icon: <FaDatabase />, percent: 88 },
  { name: 'Supabase', icon: <SiSupabase />, percent: 70 },
  { name: 'TypeScript', icon: <SiTypescript />, percent: 74 },
  { name: 'APIs', icon: <SiApachespark />, percent: 81 },
  { name: 'Git', icon: <FaGit />, percent: 85 },
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.percent}%` }} />
              </div>
              <div className="progress-percent">{skill.percent}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
