import React, { useState } from "react";
import FriendItem from "../Friend/FriendItem";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";

const FriendList = (props) => {
  const friends = useSelector((state) => state.friendReducer);

  const [pageNumber, setPageNumber] = useState(0);
  const friendsPerPage = 4;

  const pageVisited = pageNumber * friendsPerPage;

  let displayFriends, pageCount;

  if (props.searchValue.length === 0) {
    displayFriends = friends
      .slice(pageVisited, pageVisited + friendsPerPage)
      .map((user) => {
        return (
          <FriendItem
            name={user.name}
            key={user.id}
            id={user.id}
            fav={user.fav}
          />
        );
      });

    pageCount = Math.ceil(friends.length / friendsPerPage);
  } else {
    let searchResult = friends.filter((user) =>
      user.name.includes(props.searchValue)
    );

    pageCount = Math.ceil(searchResult.length / friendsPerPage);

    displayFriends = searchResult
      .slice(pageVisited, pageVisited + friendsPerPage)
      .map((user) => {
        return (
          <FriendItem
            name={user.name}
            key={user.id}
            id={user.id}
            fav={user.fav}
          />
        );
      });
  }

  Math.ceil(friends.length / friendsPerPage);

  const changePageHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {displayFriends}
      {friends.length > 4 && (
        <Pagination count={pageCount} pageChange={changePageHandler} />
      )}
    </div>
  );
};

export default FriendList;
