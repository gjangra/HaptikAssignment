import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

const Pagination = (props) => {
  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      pageCount={props.count}
      onPageChange={props.pageChange}
      containerClassName={styles.paginationButtons}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={styles.paginationActive}
    />
  );
};

export default Pagination;
