import React from "react";
import openSocket from "socket.io-client";

const ChatRoom = () => {
  const socket = openSocket("http://localhost:4444");

  return <div>ChatRoom</div>;
};

export default ChatRoom;
