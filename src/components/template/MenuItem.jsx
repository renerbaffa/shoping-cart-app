import React from 'react';

import './MenuItem.css';

const MenuItem = ({ label }) => (
  <a className="MenuItem-container">
    {label}
  </a>
);

export default MenuItem;
