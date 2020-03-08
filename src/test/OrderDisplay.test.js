import React from 'react';
import { shallow } from 'enzyme';
import OrderDisplay from '../components/OrderDisplay.jsx';
import footwearOrders from '../api/fakeData.json';

describe('Order Display', () => {
  it('should render order details for each order', () => {
    const wrapper = shallow(<OrderDisplay footwearOrders={footwearOrders} />);

    expect(wrapper.find('OrderDetails')).toHaveLength(24);
  });
});
