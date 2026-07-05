import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import decidelyLogo from '../assets/Decidely-logo.jpeg';

const Products = () => {
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

  // Single Product Data
  const product = {
    id: 1,
    name: 'Decidely',
    badge: 'Flagship Product',
    description: 'Decidely is an agency approval management SaaS that replaces chaotic email threads with secure magic links. Agencies send clients a single link to review and approve work—no login required, no accounts to create. Track decisions in real-time, get clear feedback, and move projects forward faster.',
    image: decidelyLogo,
    gradientStart: '#667eea',
    gradientEnd: '#764ba2',
    emoji: '🚀',
    status: 'Coming Soon',
    tags: ['SaaS', 'AI', 'Automation'],
    features: ['Creating Approvals', 'Magic Links', 'Client Portal', 'Workspaces and Projects'],
    link: '#'
  };

  return (
    <section
      id="products"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <div 
        className="bg-gradient-circle" 
        style={{ 
          top: '10%', 
          right: '5%', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          position: 'absolute',
          opacity: 0.1,
          filter: 'blur(60px)',
        }}
      ></div>
      <div 
        className="bg-gradient-circle" 
        style={{ 
          bottom: '10%', 
          left: '5%', 
          width: '400px', 
          height: '400px', 
          background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
          borderRadius: '50%',
          position: 'absolute',
          opacity: 0.1,
          filter: 'blur(60px)',
        }}
      ></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Title */}
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            }}
          >
            OUR PRODUCT
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            One Platform,{' '}
            <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Infinite Possibilities
            </span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Discover our flagship product designed to revolutionize how agencies work
          </p>
        </div>

        {/* Single Product Card - Full Width */}
        <Row>
          <Col lg={12}>
            <ProductCard product={product} />
          </Col>
        </Row>

        {/* More Products Coming Soon Message */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2rem',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(102, 126, 234, 0.1)',
        }}>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
            color: '#1e293b',
          }}>
            More Products Coming Soon!
          </h4>
          <p style={{
            color: '#64748b',
            marginBottom: 0,
          }}>
            We're building more innovative solutions for agencies. Stay tuned for updates!
          </p>
        </div>
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
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </section>
  );
};

export default Products;






// import React, { useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import ProductCard from './ProductCard';
// import decidelyLogo from '../assets/Decidely-logo.jpeg';

// const Products = () => {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.fade-up');
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   // Dummy products for now - will be replaced with real products later
//   const products = [
//     {
//       id: 1,
//       name: 'Decidely',
//       description: 'Decidely is an agency approval management SaaS that replaces chaotic email threads with secure magic links. Agencies send clients a single link to review and approve work—no login required, no accounts to create. Track decisions in real-time, get clear feedback, and move projects forward faster.',
//       image: decidelyLogo,
//       gradientStart: '#667eea',
//       gradientEnd: '#764ba2',
//       emoji: '🚀',
//       status: 'Launched',
//       tags: ['SaaS', 'AI'],
//       link: '#',
//       aboutLink: '#'
//     },
//     // {
//     //   id: 2,
//     //   name: 'Product 2',
//     //   description: 'Description for Product 2 will be added soon. This is a placeholder for our upcoming AI tool.',
//     //   image: 'https://via.placeholder.com/300x200/764ba2/ffffff?text=Product+2',
//     //   gradientStart: '#764ba2',
//     //   gradientEnd: '#667eea',
//     //   emoji: '🤖',
//     //   status: 'Coming Soon',
//     //   tags: ['AI', 'Automation'],
//     //   link: '#'
//     // },
//     // {
//     //   id: 3,
//     //   name: 'Product 3',
//     //   description: 'Description for Product 3 will be added soon. This is a placeholder for our upcoming analytics platform.',
//     //   image: 'https://via.placeholder.com/300x200/06b6d4/ffffff?text=Product+3',
//     //   gradientStart: '#06b6d4',
//     //   gradientEnd: '#3b82f6',
//     //   emoji: '📊',
//     //   status: 'Coming Soon',
//     //   tags: ['Analytics', 'SaaS'],
//     //   link: '#'
//     // },
    
//   ];

//   return (
//     <section
//       id="products"
//       style={{
//         padding: '100px 0',
//         background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background Elements */}
//       <div className="bg-gradient-circle" style={{ top: '10%', right: '5%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
//       <div className="bg-gradient-circle" style={{ bottom: '10%', left: '5%', width: '400px', height: '400px', background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)' }}></div>
//       <div className="bg-dots"></div>

//       <Container style={{ position: 'relative', zIndex: 2 }}>
//         {/* Section Title */}
//         <div className="section-title fade-up">
//           <span className="title-badge">OUR PRODUCTS</span>
//           <h2>
//             Explore Our <span className="gradient-text">SaaS & AI Solutions</span>
//           </h2>
//           <p>
//             We're building powerful tools to help agencies and teams work smarter, faster, and better.
//           </p>
//         </div>

//         {/* Products Grid */}
//         <Row className="g-4">
//           {products.map((product, index) => (
//             <Col key={product.id} lg={4} md={6} style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}>
//               <ProductCard product={product} />
//             </Col>
//           ))}
//         </Row>

//         {/* Message for more products coming */}
//         <div style={{
//           textAlign: 'center',
//           marginTop: '4rem',
//           padding: '2rem',
//           background: 'white',
//           borderRadius: '20px',
//           boxShadow: 'var(--shadow-md)',
//         }}>
//           <h3 style={{
//             fontSize: '1.5rem',
//             fontWeight: 600,
//             marginBottom: '1rem',
//             color: 'var(--dark)',
//           }}>
//             More Products Coming Soon!
//           </h3>
//           <p style={{
//             color: 'var(--gray)',
//             marginBottom: '1.5rem',
//           }}>
//             We're constantly innovating and building new solutions. Stay tuned for more exciting products!
//           </p>
//           <button 
//             className="btn-custom-primary"
//             onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
//           >
//             Get Notified
//           </button>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Products;

