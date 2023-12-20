// TopNavigation.js

import React, { useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "./TopNavigation.css";
import Logo from "../../assets/img/logo.png";

const TopNavigation = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const imageStyle = {
    width: "238.89px",
    height: "36.11px",
    top: "-11.11px",
  };
  const navItem={
    width:"381px",
    height: "17px",
    gap: "28px",
  };
  const navLink={
    textTransform: 'uppercase',
fontFamily: 'Inter',
fontSize: '14px',
fontWeight: '500',
lineHeight: '17px',
letterSpacing: '0em',
textAlign: 'left',
color:'#FFFFFF'

  }

  return (
    <Navbar
      bg="#6b3cc9"
      variant="dark"
      expand="lg"
      className="p-3"
      style={{ backgroundColor: "#6b3cc9", color: "#ffffff" }}
    >
      <Image src={Logo} alt="logo" style={imageStyle} />
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

      <Navbar.Collapse
        id="basic-navbar-nav"
        className={`justify-content-end ${expanded ? "show" : ""}`}
      >
        <Nav style={navItem}>
          <Nav.Link href="#service" style={navLink}>Service</Nav.Link>
          <Nav.Link href="#about-us" style={navLink}>About Us</Nav.Link>
          <Nav.Link href="#contact-us" style={navLink}>Contact Us</Nav.Link>
          <Nav.Link href="#careers" style={navLink}>Careers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavigation;
