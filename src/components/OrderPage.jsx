import React from 'react';
import PropTypes from 'prop-types';
import OrderDisplay from './OrderDisplay';
import OrderStatusBar from './OrderStatusBar';
import '../assets/OrderPage.css';

class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      footWearOrders: [],
      statusTypes: [
        'All',
        'Ready to try',
        'On the way',
        'Out of stock',
        'In the queue'
      ],
      selectedStatus: ''
    };
  }

  componentDidMount() {
    return this.props.api.getAllFootwearOrders().then(orders => {
      this.setState({
        footWearOrders: orders
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedStatus !== prevState.selectedStatus) {
      return this.props.api.getAllFootwearOrders().then(orders => {
        const footWearOrders = orders.filter(order => {
          return this.state.selectedStatus === 'All'
            ? order
            : order.status === this.state.selectedStatus;
        });

        this.setState({ footWearOrders });
      });
    }
  }

  handleStatusClick(status) {
    const ordersByStatus = this.state.footWearOrders.filter(order => {
      return status === 'All' ? order : order.status === status;
    });
    this.setState({ selectedStatus: status, footWearOrders: ordersByStatus });
  }

  render() {
    return (
      <div className="order-page">
        <OrderStatusBar
          statusTypes={this.state.statusTypes}
          handleStatusClick={this.handleStatusClick.bind(this)}
        />
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
