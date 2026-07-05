// import React from 'react';
// import { Card } from 'react-bootstrap';
// import { FaArrowRight } from 'react-icons/fa';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="fade-up">
//       <Card 
//         className="product-card h-100"
//         style={{
//           border: 'none',
//           borderRadius: '20px',
//           overflow: 'hidden',
//           boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//           transition: 'all 0.3s ease',
//           cursor: 'pointer',
//           height: '100%',
//           backgroundColor: 'white',
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = 'translateY(-10px)';
//           e.currentTarget.style.boxShadow = '0 30px 50px rgba(37, 99, 235, 0.2)';
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = 'translateY(0)';
//           e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
//         }}
//       >
//         {/* Image Section */}
//         <div
//           style={{
//             height: '220px',
//             overflow: 'hidden',
//             position: 'relative',
//             background: product.image ? 'none' : `linear-gradient(135deg, ${product.gradientStart || '#667eea'} 0%, ${product.gradientEnd || '#764ba2'} 100%)`,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           {product.image ? (
//             <img
//               src={product.image}
//               alt={product.name}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 transition: 'transform 0.5s ease',
//               }}
//               onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
//               onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
//             />
//           ) : (
//             <div
//               style={{
//                 fontSize: '5rem',
//                 color: 'white',
//                 opacity: 0.9,
//                 animation: 'float 4s ease-in-out infinite',
//               }}
//             >
//               {product.emoji || '🚀'}
//             </div>
//           )}

//           {/* Status Badge */}
//           {product.status && (
//             <span
//               style={{
//                 position: 'absolute',
//                 top: '1rem',
//                 right: '1rem',
//                 background: product.status === 'Coming Soon' 
//                   ? 'rgba(245, 158, 11, 0.9)' 
//                   : product.status === 'Beta' 
//                   ? 'rgba(16, 185, 129, 0.9)' 
//                   : 'rgba(37, 99, 235, 0.9)',
//                 color: 'white',
//                 padding: '0.4rem 1.2rem',
//                 borderRadius: '50px',
//                 fontSize: '0.8rem',
//                 fontWeight: 600,
//                 backdropFilter: 'blur(5px)',
//                 letterSpacing: '0.5px',
//                 boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//               }}
//             >
//               {product.status}
//             </span>
//           )}
//         </div>

//         {/* Content Section */}
//         <Card.Body style={{ padding: '2rem' }}>
//           <Card.Title
//             style={{
//               fontSize: '1.6rem',
//               fontWeight: 700,
//               marginBottom: '0.75rem',
//               color: '#1e293b',
//             }}
//           >
//             {product.name}
//           </Card.Title>

//           <Card.Text
//             style={{
//               color: '#64748b',
//               lineHeight: 1.7,
//               marginBottom: '1.5rem',
//               fontSize: '0.95rem',
//             }}
//           >
//             {product.description}
//           </Card.Text>

//           {/* Tags */}
//           {product.tags && product.tags.length > 0 && (
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
//               {product.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   style={{
//                     background: '#f1f5f9',
//                     padding: '0.3rem 1rem',
//                     borderRadius: '50px',
//                     fontSize: '0.8rem',
//                     fontWeight: 500,
//                     color: '#475569',
//                   }}
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* Learn More Link */}
//           <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
//             <a
//               href={product.aboutLink || '#'}
//               onClick={(e) => {
//                 if (product.aboutLink === '#') {
//                   e.preventDefault();
//                   alert(`${product.name} details coming soon!`);
//                 }
//               }}
//               style={{
//                 color: '#667eea',
//                 textDecoration: 'none',
//                 fontWeight: 600,
//                 fontSize: '1rem',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.5rem',
//                 transition: 'all 0.3s ease',
//                 cursor: 'pointer',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.color = '#764ba2';
//                 e.currentTarget.style.gap = '1rem';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.color = '#667eea';
//                 e.currentTarget.style.gap = '0.5rem';
//               }}
//             >
//               Learn More <FaArrowRight size={14} />
//             </a>
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Add animation style if not already in your CSS */}
//       <style>
//         {`
//           @keyframes float {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-10px); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ProductCard;




import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaCheckCircle, FaRocket, FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleLearnMore = (e) => {
    e.preventDefault();
    if (product.link && product.link !== '#') {
      if (product.link.startsWith('http')) {
        window.open(product.link, '_blank', 'noopener,noreferrer');
      } else {
        navigate(product.link);
      }
    } else {
      alert(`${product.name} details coming soon!`);
    }
  };

  // Feature icons mapping
  const getFeatureIcon = (feature) => {
    const icons = {
      'SaaS': <FaRocket />,
      'AI': <FaChartLine />,
      'Security': <FaShieldAlt />,
      'Team': <FaUsers />,
    };
    return icons[feature] || <FaCheckCircle />;
  };

  return (
    <div className="fade-up">
      <Card 
        className="product-card-full"
        style={{
          border: 'none',
          borderRadius: '30px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          backgroundColor: 'white',
          width: '100%',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 30px 80px rgba(37, 99, 235, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
        }}
      >
        <Row className="g-0">
          {/* Image Section - Left Side */}
          <Col lg={6}>
            <div
              style={{
                height: '100%',
                minHeight: '400px',
                overflow: 'hidden',
                position: 'relative',
                background: product.image ? 'none' : `linear-gradient(135deg, ${product.gradientStart || '#667eea'} 0%, ${product.gradientEnd || '#764ba2'} 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
              ) : (
                <div
                  style={{
                    fontSize: '8rem',
                    color: 'white',
                    opacity: 0.9,
                    animation: 'float 4s ease-in-out infinite',
                  }}
                >
                  {product.emoji || '🚀'}
                </div>
              )}

              {/* Status Badge */}
              {product.status && (
                <span
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: product.status === 'Coming Soon' 
                      ? 'rgba(245, 158, 11, 0.95)' 
                      : product.status === 'Beta' 
                      ? 'rgba(16, 185, 129, 0.95)' 
                      : 'rgba(37, 99, 235, 0.95)',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(5px)',
                    letterSpacing: '0.5px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  }}
                >
                  {product.status}
                </span>
              )}

              {/* Decorative Elements */}
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                display: 'flex',
                gap: '0.5rem',
              }}>
                {product.tags && product.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      padding: '0.3rem 1rem',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      color: 'white',
                      fontWeight: 500,
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Col>

          {/* Content Section - Right Side */}
          <Col lg={6}>
            <Card.Body style={{ 
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              minHeight: '400px',
            }}>
              {/* Product Name */}
              <Card.Title
                style={{
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  marginBottom: '0.5rem',
                  color: '#1e293b',
                }}
              >
                {product.name}
              </Card.Title>

              {/* Subtitle/Badge */}
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '0.3rem 1.2rem',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                width: 'fit-content',
              }}>
                {product.badge || 'Flagship Product'}
              </div>

              {/* Description */}
              <Card.Text
                style={{
                  color: '#64748b',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                  fontSize: '1.1rem',
                }}
              >
                {product.description}
              </Card.Text>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.8rem',
                  marginBottom: '2rem',
                }}>
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#334155',
                        fontSize: '0.95rem',
                      }}
                    >
                      <span style={{ color: '#667eea', fontSize: '1.1rem' }}>
                        {getFeatureIcon(feature)}
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ 
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}>
                <button
                  onClick={handleLearnMore}
                  className="btn-custom-primary"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '0.8rem 2.5rem',
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Learn More <FaArrowRight size={16} />
                </button>

                <button
                  style={{
                    background: 'transparent',
                    color: '#667eea',
                    border: '2px solid #667eea',
                    padding: '0.8rem 2.5rem',
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#667eea';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#667eea';
                  }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Sales
                </button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
};

export default ProductCard;