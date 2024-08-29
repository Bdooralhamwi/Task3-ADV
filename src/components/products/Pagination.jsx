import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [1,2,3,">"];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a className="page-link" href="#!" onClick={() => onPageChange(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
