import React from "react";
import { useDispatch } from "react-redux";
import DeleteButton from "../Buttons/DeleteButton";
import FavoriteButton from "../Buttons/FavoriteButton";
import styles from "./FriendItem.module.css";
import { deleteFriend, addToFavorites } from "../action";

const FriendItem = (props) => {
  const dispatch = useDispatch();

  const favoriteHandler = () => {
    dispatch(addToFavorites(props.id));
  };

  const deleteHandler = () => {
    dispatch(deleteFriend(props.id));
  };

  return (
    <div className={styles.box}>
      <div className={styles.textArea}>
        <span>{props.name}</span>
        <span>is your friend</span>
      </div>
      <div className={styles.buttonArea}>
        <FavoriteButton onFavorite={favoriteHandler} fav={props.fav} />
        <DeleteButton onDelete={deleteHandler} name={props.name} />
      </div>
    </div>
  );
};

export default FriendItem;
