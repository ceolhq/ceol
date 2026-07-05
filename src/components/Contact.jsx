import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Initialize EmailJS (you'll need to add your public key)
  useEffect(() => {
    emailjs.init("4kmnsn4bj3WlBYvt8"); // Replace with your EmailJS public key
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // EmailJS template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      message: formData.message,
      to_email: 'write2ceol@gmail.com',
    };

    // Send email using EmailJS
    emailjs.send(
      'service_kg4qcco', // Replace with your EmailJS service ID
      'template_2feevwm', // Replace with your EmailJS template ID
      templateParams
    )
    .then((response) => {
      console.log('Email sent successfully!', response);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch((error) => {
      console.error('Email failed to send:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: 'write2ceol@gmail.com',
      link: 'mailto:write2ceol@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: '+92 319 1515848',
      link: 'tel:+923191515848',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'Pakistan (Serving Globally)',
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <div className="bg-gradient-circle" style={{ top: '10%', right: '5%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
      <div className="bg-gradient-circle" style={{ bottom: '10%', left: '5%', width: '300px', height: '300px', background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)' }}></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Title */}
        <div className="section-title fade-up">
          <span className="title-badge">GET IN TOUCH</span>
          <h2>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p>
            Have questions about CEOL or our products? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <Row>
          {/* Contact Information */}
          <Col lg={4} className="fade-up" style={{ transitionDelay: '0.2s' }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              padding: '2rem',
              color: 'white',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div className="bg-dots" style={{ opacity: 0.1 }}></div>
              
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '2rem',
                position: 'relative',
              }}>
                Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      backdropFilter: 'blur(10px)',
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        marginBottom: '0.25rem',
                      }}>{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          style={{
                            color: 'white',
                            textDecoration: 'none',
                            opacity: 0.9,
                            transition: 'opacity 0.3s ease',
                          }}
                          onMouseEnter={(e) => e.target.style.opacity = 1}
                          onMouseLeave={(e) => e.target.style.opacity = 0.9}
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p style={{ margin: 0, opacity: 0.9 }}>{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div style={{
                marginTop: '2rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)',
              }}>
                <h5 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Business Hours</h5>
                <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
                  Monday - Friday: 9:00 AM - 6:00 PM (PKT)
                </p>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={8} className="fade-up" style={{ transitionDelay: '0.4s' }}>
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(37, 99, 235, 0.1)',
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '2rem',
                color: 'var(--dark)',
              }}>
                Send us a Message
              </h3>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label style={{ fontWeight: 500, marginBottom: '0.5rem' }}>
                        Your Name *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        style={{
                          padding: '0.8rem',
                          borderRadius: '10px',
                          border: `2px solid ${errors.name ? '#ef4444' : '#e2e8f0'}`,
                          transition: 'all 0.3s ease',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--primary)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                        }}
                        onBlur={(e) => {
                          if (!errors.name) {
                            e.target.style.borderColor = '#e2e8f0';
                          }
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.name && (
                        <Form.Text style={{ color: '#ef4444' }}>
                          {errors.name}
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label style={{ fontWeight: 500, marginBottom: '0.5rem' }}>
                        Email Address *
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        style={{
                          padding: '0.8rem',
                          borderRadius: '10px',
                          border: `2px solid ${errors.email ? '#ef4444' : '#e2e8f0'}`,
                          transition: 'all 0.3s ease',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--primary)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                        }}
                        onBlur={(e) => {
                          if (!errors.email) {
                            e.target.style.borderColor = '#e2e8f0';
                          }
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.email && (
                        <Form.Text style={{ color: '#ef4444' }}>
                          {errors.email}
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group className="mb-4">
                      <Form.Label style={{ fontWeight: 500, marginBottom: '0.5rem' }}>
                        Company Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        style={{
                          padding: '0.8rem',
                          borderRadius: '10px',
                          border: '2px solid #e2e8f0',
                          transition: 'all 0.3s ease',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--primary)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e2e8f0';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group className="mb-4">
                      <Form.Label style={{ fontWeight: 500, marginBottom: '0.5rem' }}>
                        Your Message *
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        isInvalid={!!errors.message}
                        style={{
                          padding: '0.8rem',
                          borderRadius: '10px',
                          border: `2px solid ${errors.message ? '#ef4444' : '#e2e8f0'}`,
                          transition: 'all 0.3s ease',
                          resize: 'vertical',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--primary)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                        }}
                        onBlur={(e) => {
                          if (!errors.message) {
                            e.target.style.borderColor = '#e2e8f0';
                          }
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.message && (
                        <Form.Text style={{ color: '#ef4444' }}>
                          {errors.message}
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <button
                  type="submit"
                  className="btn-custom-primary"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: '#10b981',
                    color: 'white',
                    borderRadius: '10px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}>
                    <FaCheckCircle /> Thank you for your message! We'll get back to you soon at {formData.email}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: '#ef4444',
                    color: 'white',
                    borderRadius: '10px',
                    textAlign: 'center',
                  }}>
                    Sorry, there was an error sending your message. Please try again or email us directly at write2ceol@gmail.com
                  </div>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;