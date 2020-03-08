import React from 'react';
import { shallow } from 'enzyme';
import OrderPage from '../components/OrderPage.jsx';
import delay from 'delay';

const fakeOrder = [
  {
    id: 'nike1234',
    imageUrl:
      'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/804264_01.jpg',
    productName: 'Nike Air VaporMax Flyknit 3',
    category: 'Men',
    size: 'UK 9',
    colour: 'Gry/Wht',
    status: 'Ready to try'
  }
];

describe('Order Page', () => {
  const api = {
    getAllFootwearOrders: jest.fn().mockReturnValue(Promise.resolve(fakeOrder))
  };

  it('should render order details', () => {
    const wrapper = shallow(<OrderPage api={api} />);
    return delay(5).then(() => {
      expect(wrapper.find('OrderDisplay').exists()).toBe(true);
    });
  });
});
