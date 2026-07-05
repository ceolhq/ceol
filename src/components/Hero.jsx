import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaRocket } from 'react-icons/fa';

const Hero = () => {
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

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        overflow: 'hidden',
        padding: '120px 0 80px',
      }}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
      }}>
        <div className="bg-gradient-circle" style={{ top: '10%', left: '5%', animation: 'float 8s ease-in-out infinite' }}></div>
        <div className="bg-gradient-circle" style={{ bottom: '10%', right: '5%', width: '400px', height: '400px', animation: 'float 10s ease-in-out infinite reverse' }}></div>
        <div className="bg-dots" style={{ opacity: 0.1 }}></div>
      </div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="align-items-center">
          <Col lg={7} className="fade-in" style={{ animation: 'slideInLeft 1s ease-out' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '1px',
                backdropFilter: 'blur(10px)',
                display: 'inline-block',
                marginBottom: '1.5rem',
              }}>
                <FaRocket className="me-2" /> BUILDING THE FUTURE
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
            }}>
              Building <span style={{
                background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                SaaS & AI Tools
              </span><br />for Agencies
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2.5rem',
              maxWidth: '90%',
              lineHeight: 1.8,
            }}>
              CEOL is a software company that builds powerful SaaS and AI solutions designed to simplify complex work, 
              streamline collaboration, and accelerate decision-making. Our mission is to remove friction from everyday 
              business workflows, helping agencies and teams operate with clarity, confidence, and speed.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                className="btn-custom-primary"
                style={{
                  background: 'white',
                  color: '#667eea',
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.border = '2px solid white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#667eea';
                  e.target.style.border = 'none';
                }}
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Products <FaArrowRight />
              </button>
              
              <button 
                className="btn-custom-outline"
                style={{
                  background: 'transparent',
                  border: '2px solid white',
                  color: 'white',
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'white';
                }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </button>
            </div>

            {/* Quick Stats */}
            <Row style={{ marginTop: '3rem' }}>
              {[
                { number: '1', label: 'Product' },
                { number: '10+', label: 'Agencies' },
                { number: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <Col key={index} xs={4}>
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '0.25rem',
                    }}>{stat.number}</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>{stat.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={5} className="fade-in" style={{ animation: 'slideInRight 1s ease-out' }}>
            <div style={{
              position: 'relative',
              padding: '2rem',
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '30px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg)'}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  height: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#667eea',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div className="bg-dots" style={{ opacity: 0.1 }}></div>
                  <div className="animate-pulse-slow" style={{ fontSize: '5rem', marginBottom: '1rem' }}>
                    🚀
                  </div>
                  <span>CEOL Ecosystem</span>
                  <span style={{ fontSize: '1rem', color: '#64748b', marginTop: '0.5rem' }}>
                    SaaS & AI Solutions
                  </span>

                  {/* Floating Elements */}
                  <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '50px',
                    height: '50px',
                    background: 'rgba(102, 126, 234, 0.2)',
                    borderRadius: '50%',
                    animation: 'float 4s ease-in-out infinite',
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: '30px',
                    height: '30px',
                    background: 'rgba(118, 75, 162, 0.2)',
                    borderRadius: '50%',
                    animation: 'float 5s ease-in-out infinite reverse',
                  }}></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;