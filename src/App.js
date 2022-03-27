import React, { useState } from "react";
import "./App.css";
import AddFriend from "./components/AddFriend/AddFriend";
import FriendList from "./components/FriendList/FriendList";
import Header from "./components/Header/Header";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <Header searchHandler={setSearchValue} />
      <AddFriend />
      <FriendList searchValue={searchValue} />
    </div>
  );
}

export default App;
