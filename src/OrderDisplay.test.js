import React from 'react';
import { shallow } from 'enzyme';
import OrderDisplay from './components/OrderDisplay.jsx';

const footWearOrders = [
  {
    id: 'nike1234',
    imageUrl:
      'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/804264_01.jpg',
    productName: 'Nike Air VaporMax Flyknit 3',
    category: 'Men',
    size: 9,
    country: 'UK',
    colour: 'Gry/Wht',
    status: 'Ready to try'
  }
];

describe('Order Display', () => {
  it('should render order details', () => {
    const wrapper = shallow(<OrderDisplay footWearOrders={footWearOrders} />);

    expect(wrapper.find('OrderDetails').exists()).toBe(true);
  });
});
