import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from '../shared/Button';

import './QuantityController.css';

const QuantityController = ({
  className,
  max,
  min,
  onAddItem,
  onRemoveItem,
  quantity,
  ...other,
}) => (
  <div
    {...other}
    className={cx('QuantityController-container', className)}
  >
    <div><b>Quantity</b></div>
    <div
      className="QuantityController-buttons-container"
    >
      <Button
        className="QuantityController-less-button"
        disabled={quantity <= min}
        onClick={onRemoveItem}
      >
        -
      </Button>
      <div>{quantity}</div>
      <Button
        className="QuantityController-more-button"
        onClick={onAddItem}
        disabled={quantity >= max}
      >
        +
      </Button>
    </div>
  </div>
);

QuantityController.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
  quantity: PropTypes.number,
};

QuantityController.defaultProps = {
  className: '',
  max: 0,
  min: 0,
  onAddItem: () => {},
  onRemoveItem: () => {},
  quantity: 0,
};

export default QuantityController;
