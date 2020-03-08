const orderData = require('./fakeData.json');

const getAllFootwearOrders = () => {
  return Promise.resolve(orderData);
};

module.exports = { getAllFootwearOrders };
