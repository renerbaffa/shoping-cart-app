import React from 'react';

/*
  Button component is an adapter.
  Imagine that in the future we move to react-bootstrap or material-ui
  In this case we only need to replase default button by the library button
*/
const Button = ({ children, ...other }) => (
  <button {...other}>
    {children}
  </button>
);

export default Button;
