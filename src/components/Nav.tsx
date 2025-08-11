import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Nav: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav style={{ marginBottom: 12 }}>
      <Link to=".">Home</Link>
      <span style={{ margin: '0 8px' }}>|</span>
      <Link to="details">Details</Link>
      <span style={{ margin: '0 8px' }}>|</span>
      <button type="button" onClick={() => navigate('/exchange')} style={{ cursor: 'pointer' }}>
        Go to /exchange
      </button>
    </nav>
  );
};


