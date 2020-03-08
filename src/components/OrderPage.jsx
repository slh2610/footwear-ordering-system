import React from 'react';
import PropTypes from 'prop-types';
import OrderDisplay from './OrderDisplay';
import OrderStatusBar from './OrderStatusBar';
import PaginationDisplay from './PaginationDisplay';
import ClipLoader from 'react-spinners/ClipLoader';
import '../assets/OrderPage.css';

class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      footwearOrders: [],
      statusTypes: [
        'All',
        'Ready to try',
        'On the way',
        'Out of stock',
        'In the queue'
      ],
      selectedStatus: 'All',
      activePage: 1,
      offset: 4,
      totalPages: 0,
      loading: false
    };

    this.paginationInterval = this.paginationInterval.bind(this);
  }

  componentDidMount() {
    const { offset, selectedStatus } = this.state;

    return this.props.api
      .getAllfootwearOrders(offset, selectedStatus)
      .then(orders => {
        this.setState({
          footwearOrders: orders.orderDetails,
          totalPages: orders.totalPages,
          loading: false
        });
        this.paginationInterval();
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.selectedStatus !== prevState.selectedStatus ||
      this.state.activePage !== prevState.activePage
    ) {
      return this.props.api
        .getAllfootwearOrders(this.state.offset, this.state.selectedStatus)
        .then(orders =>
          this.setState({
            footwearOrders: orders.orderDetails,
            totalPages: orders.totalPages,
            loading: false
          })
        );
    }
  }

  paginationInterval() {
    setInterval(() => {
      if (this.state.activePage < this.state.totalPages) {
        this.setState({
          activePage: this.state.activePage + 1,
          offset: this.state.offset + 4,
          footwearOrders: []
        });
      } else {
        this.setState({ activePage: 1, offset: 4 });
      }
    }, 10000);
  }

  handleStatusClick(status) {
    this.setState({
      selectedStatus: status,
      footwearOrders: [],
      loading: true
    });
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="order-page">
          <OrderStatusBar
            statusTypes={this.state.statusTypes}
            handleStatusClick={this.handleStatusClick.bind(this)}
          />
          <OrderDisplay footwearOrders={this.state.footwearOrders} />
          <PaginationDisplay
            activePage={this.state.activePage}
            totalPages={this.state.totalPages}
          />
        </div>
      );
    } else {
      return (
        <ClipLoader size={150} color={'#123abc'} loading={this.state.loading} />
      );
    }
  }
}

OrderPage.propTypes = {
  api: PropTypes.shape({
    getAllfootwearOrders: PropTypes.func.isRequired
  })
};

export default OrderPage;
