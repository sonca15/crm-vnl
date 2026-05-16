import React from 'react';

const GlassCard = ({ children, style, className = '', onClick }) => {
  return (
    <div 
      className={`glass-card ${className}`} 
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
