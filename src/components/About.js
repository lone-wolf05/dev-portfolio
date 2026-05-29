import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGraduationCap } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import devPhoto from '../DEV.jpeg';

// Custom CountUp Component (no external dependency needed)
const CountUpNumber = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    { number: 3, label: 'Years Learning', suffix: '+' },
    { number: 6, label: 'Certifications', suffix: '+' },
    { number: 10, label: 'Skills', suffix: '+' },
    { number: 1, label: 'Projects', suffix: '+' }
  ];

  return (
    <section id="about" className="about-section section-padding">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            About <span className="highlight-text">Me</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <Row className="align-items-center mt-5">
          <Col lg={5} className="mb-4" data-aos="fade-right">
            <div className="about-image-container">
              <div className="about-image-wrapper">
                <div className="about-avatar">
  <img src={devPhoto} alt="Dev Saini" className="avatar-photo" />
</div>
                <div className="floating-badge badge-1">🎓 BCA</div>
                <div className="floating-badge badge-2">💻 Developer</div>
                <div className="floating-badge badge-3">🔐 CEH</div>
              </div>
            </div>
          </Col>

          <Col lg={7} data-aos="fade-left">
            <div className="about-content">
              <h3 className="about-name">Dev Saini</h3>
              <p className="about-role">SDE  & BCA Graduate</p>
              <p className="about-description">
                I'm a passionate BCA graduate from Rajasthan University with a strong
                foundation in web development, programming, and cybersecurity.
                I specialize in creating beautiful, responsive websites using modern
                technologies like HTML, CSS, JavaScript, and Bootstrap. With certifications
                in Ethical Hacking and multiple programming languages, I bring a
                diverse skill set to every project.
              </p>

              <div className="about-info-grid">
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <span>Gurgaon, India</span>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <span>devsaini2824@gmail.com</span>
                </div>
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <span>+91 9602824158</span>
                </div>
                <div className="info-item">
                  <FaGraduationCap className="info-icon" />
                  <span>BCA - Rajasthan University</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="stats-row mt-5">
          {stats.map((stat, index) => (
            <Col md={3} sm={6} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="stat-card">
                <h3 className="stat-number">
                  <CountUpNumber
                    end={stat.number}
                    duration={2}
                    suffix={stat.suffix}
                  />
                </h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;