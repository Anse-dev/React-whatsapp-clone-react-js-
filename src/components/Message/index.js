import React from "react";
const Message = ({ message, me }) => {
  return <p className={me && "me"}>{message}</p>;
};
export default Message;
