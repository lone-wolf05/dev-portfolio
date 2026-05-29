import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <FaEnvelope />, title: 'Email', detail: 'devsaini2824@gmail.com', color: '#00d4ff' },
    { icon: <FaPhone />, title: 'Phone', detail: '+91 9602824158', color: '#7c3aed' },
    { icon: <FaMapMarkerAlt />, title: 'Location', detail: 'Gurgaon, India', color: '#e74c3c' }
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Contact <span className="highlight-text">Me</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Let's work together</p>
        </div>

        <Row className="mt-5">
          <Col lg={4} data-aos="fade-right">
            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <div className="contact-info-card" key={index}>
                  <div className="contact-info-icon" style={{ color: info.color }}>
                    {info.icon}
                  </div>
                  <div>
                    <h5>{info.title}</h5>
                    <p>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={8} data-aos="fade-left">
            <div className="contact-form-wrapper">
              {submitted && (
                <Alert variant="success" className="glow-alert">
                  ✅ Message sent successfully!
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text" name="name" placeholder="Your Name"
                        value={formData.name} onChange={handleChange}
                        className="custom-input" required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email" name="email" placeholder="Your Email"
                        value={formData.email} onChange={handleChange}
                        className="custom-input" required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text" name="subject" placeholder="Subject"
                    value={formData.subject} onChange={handleChange}
                    className="custom-input" required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea" rows={5} name="message" placeholder="Your Message"
                    value={formData.message} onChange={handleChange}
                    className="custom-input" required
                  />
                </Form.Group>
                <Button type="submit" className="btn-glow submit-btn">
                  <FaPaperPlane className="me-2" /> Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;