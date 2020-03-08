import React from 'react';
import { shallow } from 'enzyme';
import fakeOrderDetails from '../api/fakeData.json';
import OrderPage from '../components/OrderPage.jsx';
import delay from 'delay';
import OrderDisplay from '../components/OrderDisplay.jsx';

describe('Order Page', () => {
  const api = {
    getAllfootwearOrders: jest
      .fn()
      .mockReturnValue(
        Promise.resolve({ orderDetails: fakeOrderDetails, totalPages: 6 })
      )
  };

  it('should render order details', () => {
    const wrapper = shallow(<OrderPage api={api} />);
    return delay(1).then(() => {
      expect(wrapper.find(OrderDisplay).exists()).toBe(true);
    });
  });

  it('should render order status links', () => {
    const wrapper = shallow(<OrderPage api={api} />);
    return delay(1).then(() => {
      expect(wrapper.find('OrderStatusBar').exists()).toBe(true);
    });
  });

  it('should render a pagination bar', () => {
    const wrapper = shallow(<OrderPage api={api} />);
    return delay(1).then(() => {
      expect(wrapper.find('PaginationDisplay').exists()).toBe(true);
    });
  });
});
