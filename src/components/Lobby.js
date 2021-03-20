import RoomList from "./RoomList";
import CreateNickname from "./CreateNickname";

const Lobby = ({
  onCurrentPageHandler,
  onChangeHandler,
  onSelectChannel,
  readyToJoin,
  nickname,
  selectedChannel,
}) => {
  return (
    <div>
      <RoomList onSelectChannel={onSelectChannel} />
      <p>
        {selectedChannel
          ? `You will join room ${selectedChannel}`
          : "Please Select a Room"}
      </p>
      <CreateNickname onChangeHandler={onChangeHandler} nickname={nickname} />
      <p>
        {nickname ? `Your nickname is ${nickname}` : "Please Select a Nickname"}
      </p>

      <button
        onClick={onCurrentPageHandler}
        data-navigateto="chatroom"
        disabled={!readyToJoin}
      >
        Enter
      </button>
    </div>
  );
};

export default Lobby;
