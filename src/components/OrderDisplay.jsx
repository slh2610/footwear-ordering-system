import React from 'react';
import PropTypes from 'prop-types';
import OrderDetails from './OrderDetails';

const OrderDisplay = ({ footWearOrders }) => {
  if (footWearOrders) {
    return (
      <div>
        {footWearOrders.map(order => {
          return (
            <div key={order.id}>
              <OrderDetails
                name={order.productName}
                size={order.size}
                image={order.imageUrl}
                category={order.category}
                status={order.status}
              />
            </div>
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
