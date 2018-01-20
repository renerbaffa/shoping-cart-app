import React from 'react';
import PropTypes from 'prop-types';

import ReactImageFallback from 'react-image-fallback';

import Loader from '../template/Loader';
import notFound from  '../../images/not-found.png';

import './Image.css';

/*
  Image component is an adapter.
  Imagine that in the future we move to react-bootstrap or material-ui
  In this case we only need to replase default Image by the library Image
*/
const Image = ({ alt, src, ...other }) => (
  <ReactImageFallback
    {...other}
    initialImage={
      <Loader
        className="Image-loader"
        show
      />
    }
    fallbackImage={notFound}
    src={src}
    alt={alt}
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
