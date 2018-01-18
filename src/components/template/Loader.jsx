import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'react-loader-spinner'

import './Loader.css';

const MyLoader = ({ show, ...other }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="Loader-container">
      <Spinner
        type="TailSpin"
        color="gray"
      />
    </div>
  );
}

MyLoader.propTypes = {
  show: PropTypes.bool,
};

MyLoader.defaultProps = {
  show: false,
};

export default MyLoader;
