import React from 'react';

const Header = props =>
  <div
    style={{
      backgroundColor: '#222',
      padding: '10px',
      color: 'white',
      border: '8px #909090 double',
      marginBottom: '10px',
    }}
  >
    <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Snakx</span>
    <div
      style={{
        textAlign: 'left',
        padding: '0 40px',
      }}
    >
      <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
        Score: {props.score}
      </span>
    </div>
  </div>;

export default Header;
