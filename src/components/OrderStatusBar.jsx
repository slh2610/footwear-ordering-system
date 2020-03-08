import React from 'react';
import PropTypes from 'prop-types';
import '../assets/OrderStatusBar.css';

const OrderStatusBar = ({ statusTypes, handleStatusClick }) => {
  return (
    <div className="order-status-bar">
      {statusTypes.map((status, index) => {
        return (
          <nav
            key={index}
            className="status-item"
            onClick={() => handleStatusClick(status)}
          >
            <div className={`status-type ${status.replace(/\s/g, '-')}`}></div>
            <p>{status}</p>
          </nav>
        );
      })}
    </div>
  );
};

OrderStatusBar.propTypes = {
  statusTypes: PropTypes.array.isRequired,
  handleStatusClick: PropTypes.func.isRequired
};

export default OrderStatusBar;
