import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaExternalLinkAlt, FaCode, FaShoppingCart,
  FaReact, FaNodeJs, FaGithub
} from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce App',
      description: 'Built an eCommerce website enabling sellers to showcase products with images, descriptions, and pricing. Implemented product comparison feature allowing users to compare similar products across sellers.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      icon: <FaShoppingCart />,
      date: 'Aug 2023 - Sep 2023',
      color: '#00d4ff',
      features: [
        'Product listing with images & descriptions',
        'Price comparison across sellers',
        'Responsive design',
        'User-friendly interface'
      ]
    },
    {
      title: 'Portfolio Website (This Site!)',
      description: 'A modern, animated portfolio website built with React.js featuring particle animations, smooth scrolling, AOS animations, and a fully responsive dark theme design.',
      tech: ['React.js', 'Node.js', 'Bootstrap', 'CSS3'],
      icon: <FaReact />,
      date: '2024',
      color: '#61DAFB',
      features: [
        'Built with React.js & Bootstrap',
        'Particle background animation',
        'Smooth scroll navigation',
        'Fully responsive design'
      ]
    },
    {
      title: 'MERN Stack Project',
      description: 'Full-stack web application built with MongoDB, Express.js, React.js, and Node.js. Features RESTful API, user authentication, and CRUD operations.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      icon: <FaNodeJs />,
      date: 'Coming Soon',
      color: '#339933',
      features: [
        'MongoDB database integration',
        'Express.js REST API',
        'React.js frontend',
        'Node.js backend server'
      ]
    }
  ];

  const getTechIcon = (tech) => {
    const icons = {
      'React.js': <FaReact style={{ color: '#61DAFB' }} />,
      'Node.js': <FaNodeJs style={{ color: '#339933' }} />,
      'MongoDB': <SiMongodb style={{ color: '#47A248' }} />,
      'Express.js': <SiExpress style={{ color: '#ffffff' }} />,
    };
    return icons[tech] || null;
  };

  return (
    <section id="projects" className="projects-section section-padding">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            My <span className="highlight-text">Projects</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">What I've built</p>
        </div>

        <Row className="justify-content-center mt-5">
          {projects.map((project, index) => (
            <Col lg={6} key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="project-card-featured">
                <div className="project-card-glow" style={{ background: project.color }}></div>
                <div className="project-card-header">
                  <div className="project-icon" style={{ color: project.color }}>
                    {project.icon}
                  </div>
                  <div className="project-header-info">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-date">{project.date}</span>
                  </div>
                  <div className="project-links">
                    <a href="#!" className="project-link" title="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                    <a href="#!" className="project-link" title="GitHub">
                      <FaGithub />
                    </a>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h5>Key Features:</h5>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>
                        <FaCode className="feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {getTechIcon(tech)}
                      {' '}{tech}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
