import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Monica &middot; Julie &middot; Jen &middot; Angie &middot; All Rights Reserved </p>
    </footer>
  );
};

export default Footer;