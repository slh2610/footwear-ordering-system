import React from 'react';
import PropTypes from 'prop-types';
import OrderDisplay from './OrderDisplay';
import OrderStatusBar from './OrderStatusBar';
import PaginationDisplay from './PaginationDisplay';
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
      offset: 4
    };

    this.paginationInterval = this.paginationInterval.bind(this);
  }

  componentDidMount() {
    const { offset, selectedStatus } = this.state;

    return this.props.api
      .getAllfootwearOrders(offset, selectedStatus)
      .then(footwearOrders => {
        this.setState({ footwearOrders });
        this.paginationInterval();
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedStatus !== prevState.selectedStatus) {
      return this.props.api
        .getAllfootwearOrders(4, this.state.selectedStatus)
        .then(footwearOrders => this.setState({ footwearOrders }));
    }
  }

  paginationInterval() {
    setInterval(() => {
      if (this.state.activePage < this.state.footwearOrders.length) {
        this.setState({
          activePage: this.state.activePage + 1,
          offset: this.state.offset + 4
        });
        return this.props.api
          .getAllfootwearOrders(this.state.offset, this.state.selectedStatus)
          .then(footwearOrders => this.setState({ footwearOrders }));
      } else this.setState({ activePage: 1, offset: 4 });
    }, 10000);
  }

  handleStatusClick(status) {
    this.setState({ selectedStatus: status });
  }

  render() {
    return (
      <div className="order-page">
        <OrderStatusBar
          statusTypes={this.state.statusTypes}
          handleStatusClick={this.handleStatusClick.bind(this)}
        />
        <OrderDisplay footwearOrders={this.state.footwearOrders} />
        <PaginationDisplay
          activePage={this.state.activePage}
          totalPages={this.state.footwearOrders.length}
        />
      </div>
    );
  }
}

OrderPage.propTypes = {
  api: PropTypes.shape({
    getAllfootwearOrders: PropTypes.func.isRequired
  })
};

export default OrderPage;
