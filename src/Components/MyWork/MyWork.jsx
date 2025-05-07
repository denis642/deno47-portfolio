import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
      {mywork_data.map((work, index) => (
       <div className="project-card" key={index}>
       <img src={work.w_img} alt={work.title} />
        <h3>{work.title}</h3>
        <p className="project-desc">{work.description}</p>
        <div className="project-links">
        <a href={work.github} target="_blank" rel="noopener noreferrer">View Code</a>
        <a href={work.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>
))}

      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
