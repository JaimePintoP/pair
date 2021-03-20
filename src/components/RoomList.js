import React from "react";

const RoomList = ({ onSelectChannel }) => {
  return (
    <div>
      <h2>Room List</h2>
      <h4 onClick={onSelectChannel}>General</h4>
    </div>
  );
};

export default RoomList;
