import React from 'react';
import PropTypes from 'prop-types';
import OrderDisplay from './OrderDisplay';
import '../assets/OrderPage.css';

class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      footWearOrders: []
    };
  }

  componentDidMount() {
    return this.props.api.getAllFootwearOrders().then(orders => {
      this.setState({
        footWearOrders: orders
      });
    });
  }

  render() {
    return (
      <div className="order-page">
        <OrderDisplay footWearOrders={this.state.footWearOrders} />
      </div>
    );
  }
}

OrderPage.propTypes = {
  api: PropTypes.shape({
    getAllFootwearOrders: PropTypes.func.isRequired
  })
};

export default OrderPage;
