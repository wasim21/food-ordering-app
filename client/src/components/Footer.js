import React from 'react';
import './Footer.css'; // Import the CSS file for additional styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Mohammad Waseem Shaikh. All rights reserved.</p>
      
    </footer>
  );
};

export default Footer;
