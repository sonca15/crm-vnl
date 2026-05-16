import React from 'react';

const Button = ({ children, variant = 'primary', onClick, style, className = '', type = 'button', icon: Icon }) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-ghost';
  
  return (
    <button 
      type={type}
      className={`${baseClass} ${className}`} 
      onClick={onClick}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '8px',
        ...style 
      }}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;
