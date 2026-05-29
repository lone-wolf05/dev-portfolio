import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaReact, FaNodeJs } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'MERN Stack Developer',
    'React.js Developer',
    'Node.js Developer',
    'Front-End Developer',
    'Python Developer',
    'Ethical Hacker'
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="hero-section">
      <ParticleBackground />
      <Container className="hero-content">
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="mx-auto text-center">
            <div className="hero-badge" data-aos="fade-down">
              👋 Welcome to my Portfolio
            </div>
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
              Hi, I'm <span className="highlight-text">Dev Saini</span>
            </h1>
            <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
              I'm a{' '}
              <span className="typed-text">
                {text}
                <span className="cursor">|</span>
              </span>
            </h2>
            <p className="hero-description" data-aos="fade-up" data-aos-delay="600">
              Passionate MERN Stack Developer building beautiful web experiences
              with React.js & Node.js. Solving complex problems with clean, efficient code.
            </p>

            {/* Tech Icons Row */}
            <div className="hero-tech-icons" data-aos="fade-up" data-aos-delay="700">
              <div className="tech-icon-circle" title="React.js">
                <FaReact className="spinning" style={{ color: '#61DAFB' }} />
              </div>
              <div className="tech-icon-circle" title="Node.js">
                <FaNodeJs style={{ color: '#339933' }} />
              </div>
            </div>

            <div className="hero-buttons" data-aos="fade-up" data-aos-delay="800">
              <a href="#contact" className="btn btn-glow me-3">
                <FaEnvelope className="me-2" /> Contact Me
              </a>
              <a href="#projects" className="btn btn-outline-glow">
                <FaDownload className="me-2" /> View Projects
              </a>
            </div>
            <div className="social-links" data-aos="fade-up" data-aos-delay="1000">
              <a href="mailto:devsaini2824@gmail.com" className="social-icon">
                <FaEnvelope />
              </a>
              <a href="https://github.com/" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;