import React from 'react';
import PropTypes from 'prop-types';
import OrderDisplay from './OrderDisplay';

class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      footWearOrders: []
    };
  }

  componentDidMount() {
    return this.props.api().then(orders => {
      this.setState({
        footWearOrders: orders
      });
    });
  }

  render() {
    return (
      <div>
        <OrderDisplay footWearOrders={this.state.footWearOrders} />
      </div>
    );
  }
}

OrderPage.propTypes = {
  api: PropTypes.func.isRequired
};

export default OrderPage;
