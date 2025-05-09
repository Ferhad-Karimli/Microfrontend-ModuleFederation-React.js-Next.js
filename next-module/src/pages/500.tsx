import React from 'react';

export default function Custom500() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column' 
    }}>
      <h1 style={{ fontSize: '4rem', margin: 0 }}>500</h1>
      <p style={{ fontSize: '1.5rem' }}>Server Error</p>
    </div>
  );
}