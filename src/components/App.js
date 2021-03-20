import React, { useState } from "react";
import ChatRoom from "./ChatRoom";

import Lobby from "./Lobby";

const App = () => {
  const [nickname, setNickname] = useState("");
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [currentPage, setCurrentPage] = useState("lobby");

  const onCurrentPageHandler = (event) => {
    setCurrentPage(event.target.dataset.navigateto);
  };

  const onChangeHandler = (event) => {
    setNickname(event.target.value);
  };

  const onSelectChannel = (event) => {
    setSelectedChannel(event.target.innerText);
  };

  const readyToJoin = nickname && selectedChannel;

  const renderPage = () => {
    if (currentPage === "lobby") {
      return (
        <Lobby
          onCurrentPageHandler={onCurrentPageHandler}
          onSelectChannel={onSelectChannel}
          onChangeHandler={onChangeHandler}
          readyToJoin={readyToJoin}
          nickname={nickname}
          selectedChannel={selectedChannel}
        />
      );
    } else if (currentPage === "chatroom") {
      return <ChatRoom />;
    }
  };

  return <div>{renderPage()}</div>;
};

export default App;
