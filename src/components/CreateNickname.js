import React from "react";

const CreateNickname = ({ onChangeHandler, nickname }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Create your nickname"
        value={nickname}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default CreateNickname;
