import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import ceolLogo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <BootstrapNavbar
      expanded={expanded}
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
      style={{
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 5px 20px rgba(0, 0, 0, 0.1)' : 'none',
        padding: scrolled ? '0.5rem 0' : '0.8rem 0', // Keep navbar height consistent
        minHeight: '70px', // Fixed navbar height
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
        }}>
          {/* Logo Container - Overflowing */}
          <BootstrapNavbar.Brand 
            href="#home" 
            className="d-flex align-items-center"
            style={{
              padding: 0,
              margin: 0,
              lineHeight: 0,
              position: 'relative',
              zIndex: 10,
            }}
          >
            <div style={{
              height: scrolled ? '100px' : '110px', // 90px logo height
              width: 'auto',
              marginTop: scrolled ? '-25px' : '-35px', // Pull logo up to overflow
              marginBottom: scrolled ? '-35px' : '-45px', // Pull logo down to overflow
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img 
                src={ceolLogo} 
                alt="CEOL Logo"
                style={{
                  height: '100%',
                  width: 'auto',
                  maxWidth: '220px',
                  objectFit: 'contain',
                  filter: scrolled ? 'none' : 'brightness(1.1)', // Optional: make logo brighter on transparent navbar
                  transition: 'all 0.3s ease',
                }}
              />
            </div>
          </BootstrapNavbar.Brand>

          {/* Toggle Button for Mobile */}
          <BootstrapNavbar.Toggle 
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
            style={{ 
              border: 'none', 
              outline: 'none',
              zIndex: 10,
            }}
          >
            {expanded ? <FaTimes size={24} color="#2563eb" /> : <FaBars size={24} color={scrolled ? '#2563eb' : 'white'} />}
          </BootstrapNavbar.Toggle>

          {/* Navigation Links */}
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link.name}
                  href={link.href}
                  className="nav-link-custom"
                  onClick={() => setExpanded(false)}
                  style={{
                    color: scrolled ? '#1e293b' : 'white',
                    margin: '0 0.5rem',
                    fontWeight: 500,
                    position: 'relative',
                    transition: 'color 0.3s ease',
                    zIndex: 10,
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                  onMouseLeave={(e) => e.target.style.color = scrolled ? '#1e293b' : 'white'}
                >
                  {link.name}
                </Nav.Link>
              ))}
              
            </Nav>
          </BootstrapNavbar.Collapse>
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;