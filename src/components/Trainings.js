import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCertificate, FaShieldAlt, FaCode, FaLaptopCode, FaJava, FaPython } from 'react-icons/fa';

const Trainings = () => {
  const trainings = [
    {
      title: 'Front-End Web Development',
      org: 'Internshala Trainings',
      period: 'Jul 2023 - Sep 2023',
      icon: <FaLaptopCode />,
      color: '#00d4ff'
    },
    {
      title: 'Core Java',
      org: 'SSDN Technologies, Gurgaon',
      period: 'Oct 2022',
      icon: <FaJava />,
      color: '#007396'
    },
    {
      title: 'Core & Advanced Python',
      org: 'SSDN Technologies, Gurgaon',
      period: 'Oct 2022 - Dec 2022',
      icon: <FaPython />,
      color: '#3776AB'
    },
    {
      title: 'Certified Ethical Hacker',
      org: 'EC-Council',
      period: 'Dec 2021 - May 2022',
      icon: <FaShieldAlt />,
      color: '#e74c3c'
    },
    {
      title: 'C & C++ Programming',
      org: 'TCA, Gurgaon',
      period: 'Nov 2020 - Jan 2021',
      icon: <FaCode />,
      color: '#7c3aed'
    },
    {
      title: 'Office Automation & Internet',
      org: 'Singhania University, Behror',
      period: 'May 2012 - Jul 2012',
      icon: <FaCertificate />,
      color: '#f39c12'
    }
  ];

  return (
    <section id="trainings" className="trainings-section section-padding">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Trainings & <span className="highlight-text">Certifications</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Continuous learning journey</p>
        </div>

        <Row className="mt-5">
          {trainings.map((training, index) => (
            <Col lg={4} md={6} key={index}
              data-aos="flip-left" data-aos-delay={index * 100}
            >
              <div className="training-card">
                <div className="training-icon" style={{ color: training.color }}>
                  {training.icon}
                </div>
                <h4 className="training-title">{training.title}</h4>
                <p className="training-org">{training.org}</p>
                <span className="training-period">{training.period}</span>
                <div className="training-glow" style={{ background: training.color }}></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Trainings;