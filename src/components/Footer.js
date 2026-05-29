import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <span className="footer-brand">
              <span className="brand-highlight">&lt;</span>
              Dev Saini
              <span className="brand-highlight"> /&gt;</span>
            </span>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <p className="footer-text">
              Made with <FaHeart className="heart-icon" /> by Dev Saini
            </p>
            <p className="footer-copyright">© 2024 All Rights Reserved</p>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <div className="footer-socials">
              <a href="mailto:devsaini2824@gmail.com"><FaEnvelope /></a>
              <a href="https://github.com/"><FaGithub /></a>
              <a href="https://linkedin.com/"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
      </Container>

      <Link to="home" smooth={true} duration={500} className="back-to-top">
        <FaArrowUp />
      </Link>
    </footer>
  );
};

export default Footer;