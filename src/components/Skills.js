import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaPhp,
  FaBootstrap, FaDatabase, FaCode, FaShieldAlt,
  FaReact, FaNodeJs
} from 'react-icons/fa';
import { SiCplusplus, SiExpress, SiMongodb, SiNpm } from 'react-icons/si';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const skillsData = [
    // Frontend Skills
    { name: 'React.js', icon: <FaReact />, level: 75, category: 'frontend', color: '#61DAFB' },
    { name: 'HTML', icon: <FaHtml5 />, level: 80, category: 'frontend', color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, level: 75, category: 'frontend', color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, level: 70, category: 'frontend', color: '#F7DF1E' },
    { name: 'Bootstrap', icon: <FaBootstrap />, level: 75, category: 'frontend', color: '#7952B3' },

    // Backend Skills
    { name: 'Node.js', icon: <FaNodeJs />, level: 75, category: 'backend', color: '#339933' },
    { name: 'Express.js', icon: <SiExpress />, level: 60, category: 'backend', color: '#ffffff' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 70, category: 'backend', color: '#47A248' },
    { name: 'Python', icon: <FaPython />, level: 70, category: 'backend', color: '#3776AB' },
    { name: 'Java', icon: <FaJava />, level: 60, category: 'backend', color: '#007396' },
    { name: 'C Programming', icon: <FaCode />, level: 65, category: 'backend', color: '#A8B9CC' },
    { name: 'C++', icon: <SiCplusplus />, level: 70, category: 'backend', color: '#00599C' },
    { name: 'PHP', icon: <FaPhp />, level: 50, category: 'backend', color: '#777BB4' },
    { name: 'NPM', icon: <SiNpm />, level: 60, category: 'backend', color: '#CB3837' },

    // Other Skills
    { name: 'DBMS', icon: <FaDatabase />, level: 70, category: 'other', color: '#336791' },
    { name: 'Data Structures', icon: <FaCode />, level: 75, category: 'other', color: '#FF6B6B' },
    { name: 'Ethical Hacking', icon: <FaShieldAlt />, level: 85, category: 'other', color: '#00d4ff' }
  ];

  const filters = [
    { key: 'all', label: '🔥 All' },
    { key: 'frontend', label: '🎨 Frontend' },
    { key: 'backend', label: '⚙️ Backend' },
    { key: 'other', label: '🛠️ Other' }
  ];

  const filteredSkills = activeFilter === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="skills-section section-padding">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            My <span className="highlight-text">Skills</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        {/* Tech Stack Highlight */}
        <div className="tech-stack-highlight" data-aos="fade-up" data-aos-delay="100">
          <div className="stack-badge frontend-stack">
            <FaReact className="stack-icon spinning" />
            <span>React.js</span>
          </div>
          <span className="stack-plus">+</span>
          <div className="stack-badge backend-stack">
            <FaNodeJs className="stack-icon" />
            <span>Node.js</span>
          </div>
          <span className="stack-plus">+</span>
          <div className="stack-badge database-stack">
            <SiExpress className="stack-icon" />
            <span>Express.js</span>
          </div>
          <span className="stack-plus">+</span>
          <div className="stack-badge database-stack">
            <SiMongodb className="stack-icon" />
            <span>MongoDB</span>
          </div>
          <div className="stack-label">MERN Stack Developer</div>
        </div>

        <div className="filter-buttons" data-aos="fade-up" data-aos-delay="200">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <Row className="mt-4">
          {filteredSkills.map((skill, index) => (
            <Col lg={3} md={4} sm={6} key={skill.name}
              data-aos="zoom-in" data-aos-delay={index * 50}
            >
              <div className="skill-card">
                <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                  <div className="skill-icon">{skill.icon}</div>
                  <svg className="skill-circle" viewBox="0 0 100 100">
                    <circle className="skill-circle-bg" cx="50" cy="50" r="45" />
                    <circle
                      className="skill-circle-progress"
                      cx="50" cy="50" r="45"
                      style={{
                        strokeDasharray: `${skill.level * 2.83} ${283 - skill.level * 2.83}`,
                        stroke: skill.color
                      }}
                    />
                  </svg>
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <span className="skill-level">{skill.level}%</span>
                <div className="skill-category-tag">{skill.category}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
