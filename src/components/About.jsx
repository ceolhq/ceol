import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaProductHunt, FaTiktok } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

const About = () => {
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

  const socialLinks = [
    { 
      icon: <FaFacebook />, 
      name: 'Facebook', 
      link: 'https://www.facebook.com/profile.php?id=61585080664214',
      color: '#1877F2'
    },
    { 
      icon: <FaInstagram />, 
      name: 'Instagram', 
      link: 'https://www.instagram.com/ceol.global/',
      color: '#E4405F'
    },
    { 
      icon: <FaProductHunt />, 
      name: 'Product Hunt', 
      link: 'https://www.producthunt.com/@ceol',
      color: '#DA552F'
    },
    { 
      icon: <SiThreads />, 
      name: 'Threads', 
      link: 'https://www.threads.com/@ceol.global',
      color: '#000000'
    },
    { 
      icon: <FaTiktok />, 
      name: 'TikTok', 
      link: 'https://www.tiktok.com/@ceol.global',
      color: '#000000'
    },
  ];

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = (e, email) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (e, phone) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `tel:${phone}`;
  };

  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        background: 'white',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Background Elements */}
      <div className="bg-gradient-circle" style={{ 
        top: '20%', 
        right: '5%', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        position: 'absolute',
        opacity: 0.1,
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none',
      }}></div>
      <div className="bg-gradient-circle" style={{ 
        bottom: '20%', 
        left: '5%', 
        width: '300px', 
        height: '300px', 
        background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
        borderRadius: '50%',
        position: 'absolute',
        opacity: 0.1,
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none',
      }}></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Title */}
        <div className="section-title fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span 
            className="title-badge"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              display: 'inline-block',
              marginBottom: '1.5rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              zIndex: 3,
              position: 'relative',
            }}
          >
            ABOUT CEOL
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', position: 'relative', zIndex: 3 }}>
            Building <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SaaS & AI Tools</span><br />for Agencies
          </h2>
        </div>

        {/* Bio Section */}
        <Row className="align-items-center mb-5">
          <Col lg={6} className="fade-up" style={{ transitionDelay: '0.2s' }}>
            <div style={{ paddingRight: '2rem', position: 'relative', zIndex: 3 }}>
              <div style={{
                position: 'relative',
                marginBottom: '2rem',
              }}>
                <FaQuoteLeft style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '-10px',
                  fontSize: '3rem',
                  color: '#667eea',
                  opacity: 0.2,
                  pointerEvents: 'none',
                }} />
                <p style={{
                  fontSize: '1.2rem',
                  color: '#1e293b',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  paddingLeft: '2rem',
                  fontWeight: 500,
                  position: 'relative',
                  zIndex: 3,
                }}>
                  "Building SaaS & AI tools for agencies."
                </p>
              </div>

              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: '#1e293b',
                position: 'relative',
                zIndex: 3,
              }}>
                Our Mission
              </h3>
              
              <p style={{
                color: '#64748b',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                position: 'relative',
                zIndex: 3,
              }}>
                CEOL is a software company that builds powerful SaaS and AI solutions designed to simplify complex work, 
                streamline collaboration, and accelerate decision-making. Our mission is to remove friction from everyday 
                business workflows, helping agencies and teams operate with clarity, confidence, and speed.
              </p>

              <p style={{
                color: '#64748b',
                lineHeight: 1.8,
                marginBottom: '2rem',
                fontSize: '1.1rem',
                position: 'relative',
                zIndex: 3,
              }}>
                At CEOL, our goal is to empower agencies, teams, and professionals with intelligent, easy-to-use software — 
                transforming manual processes into automated systems that drive productivity and performance. We combine 
                modern SaaS architecture with cutting-edge AI capabilities to bring world-class digital experiences to every user.
              </p>
            </div>
          </Col>

          <Col lg={6} className="fade-up" style={{ transitionDelay: '0.4s' }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '30px',
              padding: '3rem',
              color: 'white',
              position: 'relative',
              overflow: 'visible',
              boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
              zIndex: 3,
            }}>
              <div className="bg-dots" style={{ 
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                top: 0,
                left: 0,
                opacity: 0.2,
                pointerEvents: 'none',
                zIndex: 0,
              }}></div>
              
              <h4 style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 4,
              }}>
                Connect With Us
              </h4>

              {/* Email - Clickable */}
              <div 
                onClick={(e) => handleEmailClick(e, 'write2ceol@gmail.com')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  marginBottom: '1rem',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  zIndex: 5,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  pointerEvents: 'none',
                }}>
                  <FaEnvelope />
                </div>
                <div style={{ pointerEvents: 'none' }}>
                  <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Email</div>
                  <div style={{ fontWeight: 600 }}>write2ceol@gmail.com</div>
                </div>
              </div>

              {/* Phone - Clickable */}
              <div 
                onClick={(e) => handlePhoneClick(e, '+923191515848')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  marginBottom: '2rem',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  zIndex: 5,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  pointerEvents: 'none',
                }}>
                  <FaPhone />
                </div>
                <div style={{ pointerEvents: 'none' }}>
                  <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Phone</div>
                  <div style={{ fontWeight: 600 }}>+92 319 1515848</div>
                </div>
              </div>

              {/* Social Media - 2 per line */}
              <h5 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '1rem',
                opacity: 0.9,
                position: 'relative',
                zIndex: 4,
              }}>
                Follow Us
              </h5>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                position: 'relative',
                zIndex: 4,
              }}>
                {socialLinks.map((social, index) => (
                  <div
                    key={index}
                    onClick={(e) => handleLinkClick(e, social.link)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.8rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: 'white',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      position: 'relative',
                      zIndex: 5,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = social.color;
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      fontSize: '1.2rem',
                      width: '30px',
                      textAlign: 'center',
                      pointerEvents: 'none',
                    }}>
                      {social.icon}
                    </div>
                    <span style={{ 
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      pointerEvents: 'none',
                    }}>
                      {social.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Add animation styles */}
      <style>
        {`
          .fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
          
          .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </section>
  );
};

export default About;