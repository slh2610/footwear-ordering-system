import React from 'react';
import PropTypes from 'prop-types';
import '../assets/PaginationDisplay.css';

const PaginationDisplay = ({ activePage, totalPages }) => {
  return (
    <div className="pagination">
      <section className="pagination-icons">
        {Array(totalPages)
          .fill(1)
          .map((_, index) => (
            <div
              key={index}
              className={activePage === index + 1 ? 'active' : 'disabled'}
            ></div>
          ))}
      </section>
      <p>
        {activePage}|{totalPages}
      </p>
    </div>
  );
};

PaginationDisplay.propTypes = {
  activePage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default PaginationDisplay;
