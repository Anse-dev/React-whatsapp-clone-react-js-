import { Avatar, FilledInput, IconButton } from "@material-ui/core";
import {
  ChatOutlined,
  DonutLarge,
  EmojiEmotions,
  MoreVert,
} from "@material-ui/icons";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import db from "../../firebase.js";
import firebase from "firebase";
import Message from "../Message/index.js";
import {
  Wrapper,
  ChatHeader,
  Header,
  HeaderActions,
  ChatMessages,
  ChatFooter,
  SearchWrapper,
} from "./Chat.styles.js";

import { useStateValue } from "../../store/StateProvider";
const Chat = () => {
  const { friendId } = useParams();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState([]);
  const [hasActive, setHasActive] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [message, setMessage] = useState("");
  const [{ user }, dispatch] = useStateValue();
  /* Hooks */
  useEffect(() => {
    if (friendId) {
      db.collection("rooms")
        .doc(friendId)
        .onSnapshot((snapshot) => {
          return setName(snapshot.data().name);
        });
    }
    setIsLoading(false);
    db.collection("rooms")
      .doc(friendId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((storage) => {
        setState(storage.docs.map((doc) => doc.data()));
      });
  }, [friendId]);
  /* Helper */
  const onEmojiClick = (event, emojiObject) => {
    /*    setChosenEmoji(emojiObject); */
    setMessage(`${message} ${emojiObject && emojiObject.emoji}`);
    setHasActive(!hasActive);
  };

  const newMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection("rooms").doc(friendId).collection("messages").add({
      message: message,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };
  return (
    <Wrapper>
      <Header>
        <div className="profil">
          <Avatar />
          <span>{name}</span>
        </div>
        <HeaderActions>
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </HeaderActions>
      </Header>
      <ChatMessages>
        {isLoading
          ? "chargement ..."
          : state.map((item) => {
              return (
                <Message
                  message={item.message}
                  me={user.displayName == item.name ? true : false}
                />
              );
            })}
      </ChatMessages>
      <ChatFooter>
        <IconButton onClick={() => setHasActive(!hasActive)}>
          <EmojiEmotions />
        </IconButton>

        {hasActive && (
          <Picker
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            skinTone={SKIN_TONE_MEDIUM_DARK}
            groupNames={{ smileys_people: "PEOPLE" }}
            native
          />
        )}
        <SearchWrapper onSubmit={handleSubmit}>
          <div className="search-group">
            <input
              type="text"
              value={message}
              onChange={newMessage}
              placeholder="Insert ton message"
            />
          </div>
          <button type="submit"></button>
        </SearchWrapper>
      </ChatFooter>
    </Wrapper>
  );
};
export default Chat;
