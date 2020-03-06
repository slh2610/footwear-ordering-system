import React from 'react';
import PropTypes from 'prop-types';

const OrderDisplay = ({ footWearOrders }) => {
  if (footWearOrders) {
    return (
      <div>
        {footWearOrders.map(order => {
          return (
            <ul key={order.productName}>
              <li>{order.productName}</li>
            </ul>
          );
        })}
      </div>
    );
  } else return <div>Loading ....</div>;
};

OrderDisplay.propTypes = {
  api: PropTypes.shape({
    getAllFootwearOrders: PropTypes.func.isRequired
  })
};

export default OrderDisplay;
