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
    <div className="order-details">
      <div className={status.replace(/\s/g, '-')}></div>
      <img src={image} alt={name} />
      <p className="product-name">{name}</p>
      <p className="category">{category}</p>
      <p className="size">{size}</p>
      <p className="colour">{colour}</p>
      <div className="customer-initials">{customerInitials}</div>
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
