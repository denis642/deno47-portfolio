import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-branding">
          <h3>dev-deno</h3>
          <p>Crafting efficient solutions through clean code, creative thinking, and fullstack mastery.</p>
        </div>

        <div className="footer-social-icons">
          <a href="https://github.com/denis642" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/dennis-muuo-790654357/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/254701526064" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.facebook.com/dennis.muuo.790" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Dennis Muuo. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
