import React from "react";
import { Avatar } from "@material-ui/core";
import { DoneAll } from "@material-ui/icons";
import { Link } from "react-router-dom";
/* Styles css */
import { Wrapper, ChatInfo } from "./Chat.styles";
const Person = ({ name, message, roomId }) => {
  return (
    <Link to={`/chat/${roomId}`}>
      <Wrapper>
        <Avatar />
        <ChatInfo>
          <div className="chatInfo-inner">
            <div class="user-name">{name}</div>
            <div className="lastest-message">
              <DoneAll />
              <span>{message}</span>
            </div>
          </div>
        </ChatInfo>
      </Wrapper>
    </Link>
  );
};

export default Person;
