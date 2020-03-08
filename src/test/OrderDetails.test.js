import React from 'react';
import { shallow } from 'enzyme';
import OrderDetails from '../components/OrderDetails.jsx';

describe('Order Details', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <OrderDetails
        image="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/804264_01.jpg"
        name="Nike Air VaporMax Flyknit 3"
        category="Men"
        size="UK 9"
        colour="Gry/Wht"
        status="Ready to try"
        customerInitials="GB"
      />
    );
  });

  it('should render an order status div', () => {
    expect(
      wrapper
        .find('div')
        .at(1)
        .prop('className')
    ).toBe('Ready-to-try');
  });

  it('should render an image', () => {
    expect(wrapper.find('img').prop('src')).toEqual(
      'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/804264_01.jpg'
    );
  });

  it('should render a product name', () => {
    expect(wrapper.find('.product-name').text()).toEqual(
      'Nike Air VaporMax Flyknit 3'
    );
  });

  it('should render a shoe size', () => {
    expect(wrapper.find('.size').text()).toEqual('UK 9');
  });

  it('should render a colour', () => {
    expect(wrapper.find('.colour').text()).toEqual('Gry/Wht');
  });

  it('should render a category', () => {
    expect(wrapper.find('.category').text()).toEqual('Men');
  });

  it('should render the customer initials', () => {
    expect(wrapper.find('.customer-initials').text()).toEqual('GB');
  });
});
