import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
  ChatOutlined,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import {
  WrapperSidebar,
  Wrapper,
  Header,
  SidebarChatWrapper,
  HeaderActions,
  SearchWrapper,
} from "./Sidebar.styles";
import db from "../../firebase";
import Person from "../Person";
import { useStateValue } from "../../store/StateProvider";
import ModalNew from "../Modal";
const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  /* Hooks effects  */
  useEffect(() => {
    const listed = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      listed();
    };
  }, []);
  return (
    <WrapperSidebar>
      <Wrapper>
        <Header>
          <Avatar src={user.photoURL} />
          <HeaderActions>
            <IconButton>
              <DonutLarge />
            </IconButton>
            <IconButton>
              <ChatOutlined />
            </IconButton>
            <IconButton onClick={() => setOpen(!open)}>
              <MoreVert />
            </IconButton>
            <ModalNew open={open} setOpen={setOpen} />
          </HeaderActions>
        </Header>
        <SearchWrapper>
          <div className="search-group">
            <SearchOutlined />
            <input type="text" placeholder="rechercher ou demarrer une " />
          </div>
        </SearchWrapper>
        {/* Show Persons  */}
        <SidebarChatWrapper>
          {rooms.map((room) => {
            return (
              <Person
                key={room.id}
                name={room.data.name}
                message={"super merci !!"}
                roomId={room.id}
              />
            );
          })}
        </SidebarChatWrapper>
      </Wrapper>
    </WrapperSidebar>
  );
};

export default Sidebar;
