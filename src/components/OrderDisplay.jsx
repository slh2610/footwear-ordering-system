import React from 'react';
import PropTypes from 'prop-types';
import OrderDetails from './OrderDetails';
import '../assets/OrderDisplay.css';

const OrderDisplay = ({ footWearOrders }) => {
  if (footWearOrders) {
    return (
      <div className="order-display">
        {footWearOrders.map(order => {
          return (
            <div key={order.id} className="order-details-container">
              <OrderDetails
                name={order.productName}
                size={order.size}
                image={order.imageUrl}
                category={order.category}
                status={order.status}
                customerInitials={order.customerInitials}
              />
            </div>
          );
        })}
      </div>
    );
  } else return <div>Loading ....</div>;
};

OrderDisplay.propTypes = {
  footWearOrders: PropTypes.array
};

export default OrderDisplay;
