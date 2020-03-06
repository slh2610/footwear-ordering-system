import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Router>
        <App />
      </Router>
    );
    expect(wrapper).toBeDefined();
  });
});
