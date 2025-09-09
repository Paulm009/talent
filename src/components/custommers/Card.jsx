import { BiChevronRight } from "react-icons/bi";
import { useState, useEffect } from 'react';

const Card = ({ card }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      height: 'auto',
      minHeight: '300px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      border: '1px solid #d1d5db',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transition: 'all 0.3s ease'
    }}>
      {/* Imagen a la izquierda */}
      <div style={{
        width: isMobile ? '100%' : '40%',
        height: isMobile ? '192px' : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: '#2f0d68'
      }}>
        <img 
          src={card.img} 
          alt="Logo"
          style={{
            maxHeight: '8rem',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      
      {/* Contenido a la derecha */}
      <div style={{
        width: isMobile ? '100%' : '60%',
        padding: isMobile ? '1rem' : '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        <div style={{flex: 1, overflow: 'hidden'}}>
          <p style={{
            fontSize: isMobile ? '0.875rem' : '1.rem',
            color: '#374151',
            lineHeight: '1.5',
            display: '-webkit-box',
            WebkitLineClamp: isMobile ? 5 : 'none',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            margin: 0
          }}>
            "{card.description}"
          </p>
        </div>
        
        
      </div>
    </div>
  );
};

export default Card;