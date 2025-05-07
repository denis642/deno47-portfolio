import React from 'react';
import './About.css';
import about_img from '../../assets/Dennis muuo.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_img} alt="Dennis Muuo" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            I'm Dennis Muuo, a passionate and driven junior software developer with a strong foundation in both front-end and back-end technologies. I enjoy building intuitive and efficient applications that address real-world challenges and enhance user experiences.
            </p>
            <p>
            I am committed to creating impactful digital solutions, whether it's designing responsive user interfaces or developing robust APIs. My curiosity and continuous learning mindset drive me to explore new technologies and frameworks, always striving to improve my skills and stay up to date with industry trends.
            </p>
            <p>
            I thrive in collaborative environments where I can contribute meaningfully, learn from others, and grow alongside a team. Outside of coding, I enjoy analyzing data, exploring emerging tech trends, and working on visual design projects.
            </p>
            <p>
            My ultimate goal is to become a well-rounded full-stack developer and contribute to innovative projects that make a positive difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
