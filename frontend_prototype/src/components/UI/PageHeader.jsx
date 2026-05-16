import React from 'react';

const PageHeader = ({ title, actions }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: '32px' 
    }}>
      <h1 className="text-xl">{title}</h1>
      <div style={{ display: 'flex', gap: '12px' }}>
        {actions}
      </div>
    </div>
  );
};

export default PageHeader;
