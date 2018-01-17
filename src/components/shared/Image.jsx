import React from 'react';
import PropTypes from 'prop-types';

/*
  Image component is an adapter.
  Imagine that in the future we move to react-bootstrap or material-ui
  In this case we only need to replase default Image by the library Image
*/
const Image = ({ alt, src, ...other }) => (
  <img
    {...other}
    alt={alt}
    src={src}
  />
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

Image.defaultProps = {
  src: '',
  alt: '',
}

export default Image;
