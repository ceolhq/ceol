import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: 'CEOL has completely transformed how we manage our operations. The platform is intuitive, powerful, and the support team is exceptional. We\'ve seen a 40% increase in productivity since implementing it.',
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateLabs',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      text: 'The security features alone are worth the investment. CEOL provides enterprise-grade protection while maintaining incredible ease of use. It\'s rare to find such a perfect balance.',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager, CloudScale',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      text: 'We\'ve tried multiple solutions, but CEOL stands out. The analytics dashboard gives us insights we never had before, and the team collaboration features are seamless.',
    },
    {
      name: 'David Kim',
      position: 'Founder, GrowthHub',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      rating: 5,
      text: 'As a startup, we needed a solution that could grow with us. CEOL not only met our current needs but also has features we\'re excited to use as we scale.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <div className="bg-gradient-circle" style={{ top: '10%', left: '5%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
      <div className="bg-gradient-circle" style={{ bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)' }}></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Title */}
        <div className="section-title fade-up">
          <span className="title-badge">TESTIMONIALS</span>
          <h2>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p>
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="fade-up" style={{ position: 'relative' }}>
              {/* Main Testimonial */}
              <div
                style={{
                  background: 'white',
                  borderRadius: '30px',
                  padding: '3rem',
                  boxShadow: 'var(--shadow-lg)',
                  position: 'relative',
                }}
              >
                <FaQuoteRight style={{
                  position: 'absolute',
                  top: '2rem',
                  right: '2rem',
                  fontSize: '4rem',
                  color: 'var(--primary)',
                  opacity: 0.1,
                }} />

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginRight: '1.5rem',
                      border: '3px solid var(--primary)',
                    }}
                  />
                  <div>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      marginBottom: '0.25rem',
                    }}>{testimonials[currentIndex].name}</h4>
                    <p style={{ color: 'var(--gray)', marginBottom: '0.5rem' }}>
                      {testimonials[currentIndex].position}
                    </p>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} style={{ color: '#fbbf24' }} />
                      ))}
                    </div>
                  </div>
                </div>

                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--dark)',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  marginBottom: 0,
                }}>
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Navigation Buttons */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem',
                  marginTop: '2rem',
                }}>
                  <button
                    onClick={prevSlide}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'white',
                      border: '2px solid var(--primary)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--gradient-1)';
                      e.target.style.color = 'white';
                      e.target.style.border = 'none';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'white';
                      e.target.style.color = 'var(--primary)';
                      e.target.style.border = '2px solid var(--primary)';
                    }}
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'white',
                      border: '2px solid var(--primary)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--gradient-1)';
                      e.target.style.color = 'white';
                      e.target.style.border = 'none';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'white';
                      e.target.style.color = 'var(--primary)';
                      e.target.style.border = '2px solid var(--primary)';
                    }}
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              {/* Dots Indicator */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '2rem',
              }}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: index === currentIndex ? 'var(--primary)' : '#cbd5e1',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;