import React, { useState } from "react";
import styles from "./AddFriend.module.css";
import { useDispatch } from "react-redux";
import { addFriend } from "../action";

const AddFriend = () => {
  const [friendName, setFriendName] = useState("");

  const dispatch = useDispatch();

  const friendNameHandler = (event) => {
    setFriendName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (friendName.trim().length === 0) {
      console.log("empty friendName");
    } else {
      dispatch(addFriend(friendName));
    }
    setFriendName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className={styles.Input}
        type="text"
        placeholder="Enter Your Friend's Name"
        value={friendName}
        onChange={friendNameHandler}
      />
      <input type="submit" hidden />
    </form>
  );
};

export default AddFriend;
