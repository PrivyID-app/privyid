import React, { useState } from "react";
import CheckboxIcon from "../../assets/images/Checkbox [1.0].svg";
import CheckboxActiveIcon from "../../assets/images/Checkbox-active [1.0].svg";
import Pagination from "./Pagination";
import styles from "./Table.module.css";

const Table = ({
  columns = [],
  data = [],
  itemsPerPage = 10,
  onRowClick,
  showCheckbox = false,
  actions = [],
}) => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
      setSelectAll(false);
      return;
    }
    const all = new Set(
      paginatedData.map((_, i) => i + (currentPage - 1) * itemsPerPage),
    );
    setSelectedRows(all);
    setSelectAll(true);
  };

  const toggleRow = (index) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className={styles.table_container}>
      <div className={styles.table_wrapper}>
        <table className={styles.custom_table}>
          <thead>
            <tr>
              {showCheckbox && (
                <th className={styles.checkbox_cell}>
                  <img
                    src={selectAll ? CheckboxActiveIcon : CheckboxIcon}
                    alt="Select all"
                    onClick={toggleSelectAll}
                  />
                </th>
              )}
              {columns.map((col, i) => (
                <th key={i} style={{ width: col.width }}>
                  {col.header}
                </th>
              ))}
              {actions.length > 0 && (
                <th className={styles.action_cell}>Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => {
              const itemIndex = (currentPage - 1) * itemsPerPage + index;
              return (
                <tr
                  key={index}
                  className={
                    selectedRows.has(itemIndex) ? styles.selected_row : ""
                  }
                  onClick={() => onRowClick && onRowClick(item)}
                >
                  {showCheckbox && (
                    <td className={styles.checkbox_cell}>
                      <img
                        src={
                          selectedRows.has(itemIndex)
                            ? CheckboxActiveIcon
                            : CheckboxIcon
                        }
                        alt="Select"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleRow(itemIndex);
                        }}
                      />
                    </td>
                  )}
                  {columns.map((col, i) => (
                    <td key={i}>
                      {col.render
                        ? col.render(item[col.key], item)
                        : item[col.key]}
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td className={styles.action_cell}>
                      <div className={styles.action_buttons}>
                        {actions.map((action, i) => (
                          <button
                            key={i}
                            className={styles.action_button}
                            onClick={(e) => {
                              e.stopPropagation();
                              action.onClick(item);
                            }}
                          >
                            <span className="material-symbols-outlined">
                              {action.icon}
                            </span>
                          </button>
                        ))}
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onPageSelect={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Table;
