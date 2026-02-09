import React from 'react';
import CustomSelect from './CustomSelect';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onPageSelect,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const pageOptions = pageNumbers.map((page) => ({
    value: page,
    label: `${page}/Page ${totalPages}`,
  }));

  return (
    <div className="pagination">
      <p className="pagination_title">{`Page ${currentPage} of ${totalPages}`}</p>
      <div className="pagination_buttons">
        <button
          className="pagination_button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <div className="page">
          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`page_button ${currentPage === page ? 'active_page' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className="pagination_button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
      <CustomSelect
        options={pageOptions}
        value={currentPage}
        onSelect={onPageSelect}
        className="service_selector_custom page_dropdown_custom"
        placement="top"
      />
    </div>
  );
};

export default Pagination;
