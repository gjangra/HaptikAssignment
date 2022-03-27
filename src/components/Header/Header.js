import React from "react";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { sorting } from "../action";

const Header = ({ searchHandler }) => {
  const dispatch = useDispatch();

  const searchQuery = (event) => {
    searchHandler(event.target.value.trim());
  };

  const sortHandler = () => {
    dispatch(sorting());
  };

  return (
    <div className={styles.head}>
      <p>Friends List</p>
      <div className={styles.form}>
        <input type="text" placeholder="Search..." onChange={searchQuery} />
        <button onClick={sortHandler}>Sort Friends</button>
      </div>
    </div>
  );
};

export default Header;
