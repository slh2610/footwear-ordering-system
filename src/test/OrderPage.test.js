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
      .mockReturnValue(Promise.resolve(fakeOrderDetails))
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

  describe.skip('When the user filters the orders by status', () => {
    it('should pass down the correct props', () => {
      const wrapper = shallow(<OrderPage api={api} />);
      wrapper.setState({
        selectedStatus: 'Ready to try'
      });

      return delay(5).then(() => {
        wrapper.update();
        expect(wrapper.find(OrderDisplay).prop('footwearOrders')).toHaveLength(
          4
        );
      });
    });
  });
});
