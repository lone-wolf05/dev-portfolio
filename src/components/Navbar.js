import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-text">
          <span className="brand-highlight">&lt;</span>
          Dev Saini
          <span className="brand-highlight"> /&gt;</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['home', 'about', 'education', 'skills', 'projects', 'trainings', 'contact'].map((item) => (
              <li key={item} className="nav-item">
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link nav-link-custom"
                  style={{ cursor: 'pointer' }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;