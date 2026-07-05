import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaProductHunt, FaTiktok } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Decidely', href: '#products' },
  //   { name: 'Product 2', href: '#products' },
  //   { name: 'Product 3', href: '#products' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    // { name: 'Blog', href: '#' },
    // { name: 'Careers', href: '#' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://www.facebook.com/profile.php?id=61585080664214', name: 'Facebook' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/ceol.global/', name: 'Instagram' },
    { icon: <FaProductHunt />, href: 'https://www.producthunt.com/@ceol', name: 'Product Hunt' },
    { icon: <SiThreads />, href: 'https://www.threads.com/@ceol.global', name: 'Threads' },
    { icon: <FaTiktok />, href: 'https://www.tiktok.com/@ceol.global', name: 'TikTok' },
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, info: 'write2ceol@gmail.com', link: 'mailto:write2ceol@gmail.com' },
    { icon: <FaPhone />, info: '+92 319 1515848', link: 'tel:+923191515848' },
    { icon: <FaMapMarkerAlt />, info: 'Pakistan (Serving Globally)', link: null },
  ];

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        padding: '4rem 0 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <div className="bg-dots" style={{ opacity: 0.05 }}></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="mb-5">
          <Col lg={4} className="mb-4 mb-lg-0">
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #fff 0%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              CEOL
            </h2>
            <p style={{
              color: '#94a3b8',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}>
              Building SaaS & AI tools for agencies. We empower teams with intelligent, 
              easy-to-use software that transforms manual processes into automated systems.
            </p>

            {/* Contact Info */}
            <div style={{ marginBottom: '1.5rem' }}>
              {contactInfo.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#667eea' }}>{item.icon}</span>
                  {item.link ? (
                    <a 
                      href={item.link}
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'white'}
                      onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                    >
                      {item.info}
                    </a>
                  ) : (
                    <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.info}</span>
                  )}
                </div>
              ))}
            </div>
          </Col>

          {/* Products Section */}
          <Col lg={2} md={4} sm={6} className="mb-4">
            <h5 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              color: 'white',
            }}>
              Products
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {productLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.8rem' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      fontSize: '0.95rem',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#94a3b8';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Company Section */}
          <Col lg={2} md={4} sm={6} className="mb-4">
            <h5 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              color: 'white',
            }}>
              Company
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {companyLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.8rem' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      fontSize: '0.95rem',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#94a3b8';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Connect Section */}
          <Col lg={4} md={4} className="mb-4">
            <h5 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              color: 'white',
            }}>
              Connect With Us
            </h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.3rem',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#667eea';
                    e.target.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                  <span style={{
                    position: 'absolute',
                    bottom: '-25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '0.7rem',
                    color: '#94a3b8',
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}>
                    {social.name}
                  </span>
                </a>
              ))}
            </div>

            
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p style={{ 
              color: '#94a3b8', 
              marginBottom: 0,
              fontSize: '0.9rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '2rem',
            }}>
              © {currentYear} CEOL. All rights reserved. Made with{' '}
              <FaHeart style={{ color: '#ef4444', margin: '0 0.25rem' }} /> for agencies worldwide
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;