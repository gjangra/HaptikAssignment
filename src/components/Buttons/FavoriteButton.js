import React from "react";
import nonFavIcon from "../../images/favorite.png";
import favIcon from "../../images/star.png";
import styles from "./Button.module.css";

const FavoriteButton = (props) => {
  const icon = props.fav ? favIcon : nonFavIcon;

  return (
    <button
      className={styles.button}
      title="Add to favorites"
      onClick={props.onFavorite}
    >
      <img alt="Favorite Icon" src={icon} width="40" height="40" />
    </button>
  );
};

export default FavoriteButton;
