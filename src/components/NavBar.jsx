import React, { useState } from 'react';
import logo from "../assets/desktop/logo.svg";
import Button from "./Button";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        {/* Change the bars to a close icon when the menu is open */}
        {isMobileMenuOpen ? (
          <div className="close-icon">
            <span className="bar top"></span>
            <span className="bar bottom"></span>
          </div>
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
      <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/services">Service</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
        <Button className="button">Schedule a Call</Button>
      </nav>
    </header>
  );
}

export default NavBar;
