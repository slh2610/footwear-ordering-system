/* eslint-disable no-template-curly-in-string */
import React from 'react';
import PropTypes from 'prop-types';

const OrderDetails = ({ name, size, image, category, status }) => {
  return (
    <div classname="order-details-${status}">
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{category}</p>
      <p>{size}</p>
    </div>
  );
};

OrderDetails.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default OrderDetails;
