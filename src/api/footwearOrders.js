const orderData = require('./fakeData.json');

const getAllfootwearOrders = (offset, status) => {
  const filteredOrders = orderData.filter(order =>
    status === 'All' ? order : order.status === status
  );

  const orderDetails = filteredOrders.slice(offset - 4, offset);
  const totalPages = Math.ceil(filteredOrders.length / 4);

  return Promise.resolve({ orderDetails, totalPages });
};

module.exports = { getAllfootwearOrders };
