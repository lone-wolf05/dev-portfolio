import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'University of Commerce College, Rajasthan University',
      year: '2020 - 2023',
      icon: <FaGraduationCap />,
      description: 'Completed BCA with focus on computer science, programming, and software development.',
      color: '#00d4ff'
    },
    {
      degree: 'Senior Secondary (XII), Commerce',
      institution: 'St. Xavier\'s School, Behror (CBSE)',
      year: '2020',
      icon: <FaSchool />,
      description: 'Completed senior secondary education with Commerce stream.',
      color: '#7c3aed'
    }
  ];

  return (
    <section id="education" className="education-section section-padding">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            My <span className="highlight-text">Education</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">My academic journey</p>
        </div>

        <Row className="justify-content-center mt-5">
          <Col lg={8}>
            <div className="timeline">
              {educationData.map((edu, index) => (
                <div
                  className="timeline-item"
                  key={index}
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 200}
                >
                  <div className="timeline-dot" style={{ background: edu.color }}>
                    {edu.icon}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{edu.year}</div>
                    <h3 className="timeline-title">{edu.degree}</h3>
                    <h4 className="timeline-institution">{edu.institution}</h4>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;