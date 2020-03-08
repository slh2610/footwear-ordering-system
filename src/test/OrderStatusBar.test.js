import React from 'react';
import { shallow } from 'enzyme';
import OrderStatusBar from '../components/OrderStatusBar';

describe('Order Status Bar', () => {
  const handleStatusClick = jest.fn();

  const wrapper = shallow(
    <OrderStatusBar
      statusTypes={[
        'All',
        'Ready to try',
        'On the way',
        'Out of stock',
        'In the queue'
      ]}
      handleStatusClick={handleStatusClick}
    />
  );

  it('should render each status type', () => {
    expect(wrapper.find('.status-item')).toHaveLength(5);
  });

  it('should render a colour coded status type', () => {
    expect(
      wrapper
        .find('.status-type')
        .at(1)
        .prop('className')
    ).toEqual('status-type Ready-to-try');
  });

  it('should render a colour coded status type', () => {
    expect(
      wrapper
        .find('p')
        .at(1)
        .text()
    ).toEqual('Ready to try');
  });

  describe('On click of a status type', () => {
    it('should call the handleStatusClick function', () => {
      wrapper
        .find('.status-item')
        .at(1)
        .simulate('click');

      expect(handleStatusClick).toHaveBeenCalledWith('Ready to try');
    });
  });
});
