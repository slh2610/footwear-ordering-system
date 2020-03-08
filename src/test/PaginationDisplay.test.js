import React from 'react';
import { shallow } from 'enzyme';
import PaginationDisplay from '../components/PaginationDisplay';

describe('Pagination Display', () => {
  const wrapper = shallow(<PaginationDisplay activePage={1} totalPages={4} />);

  it('should render the correct number of pagination icons', () => {
    expect(wrapper.find('.pagination-icons').find('div')).toHaveLength(4);
  });

  it('should set the correct class for the active page', () => {
    const div = wrapper.find('.pagination-icons').find('div');
    expect(div.at(0).prop('className')).toEqual('active');
    expect(div.at(1).prop('className')).toEqual('disabled');
  });

  it('should show the current and total page numbers', () => {
    expect(wrapper.find('p').text()).toEqual('1|4');
  });
});
