/* eslint-disable no-template-curly-in-string */
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/OrderDetails.css';

const OrderDetails = ({
  name,
  size,
  image,
  category,
  colour,
  status,
  customerInitials
}) => {
  return (
    <div className="order-details-container">
      <div className={`status ${status.replace(/\s/g, '-')}`}></div>
      <div className="order-details">
        <img src={image} alt={name} />
        <h2 className="product-name">{name}</h2>
        <p className="details category">Category: {category}</p>
        <p className="details size">Size: {size}</p>
        <p className="details colour">Colour: {colour}</p>
        <div className="customer-initials">{customerInitials}</div>
      </div>
    </div>
  );
};

OrderDetails.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default OrderDetails;
