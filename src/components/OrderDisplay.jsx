import React from 'react';
import PropTypes from 'prop-types';
import OrderDetails from './OrderDetails';
import '../assets/OrderDisplay.css';

const OrderDisplay = ({ footwearOrders }) => {
  if (footwearOrders) {
    return (
      <div className="order-display">
        {footwearOrders.map(order => {
          return (
            <div key={order.id} className="order-details-container">
              <OrderDetails
                name={order.productName}
                size={order.size}
                image={order.imageUrl}
                category={order.category}
                status={order.status}
                colour={order.colour}
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
  footwearOrders: PropTypes.array
};

export default OrderDisplay;
