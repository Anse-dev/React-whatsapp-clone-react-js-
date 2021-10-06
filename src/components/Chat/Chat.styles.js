import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 0.85;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f6;
  padding: 10px 15px;
  .profil {
    display: flex;
    align-items: center;
    span {
      font-size: 1rem;
      font-weight: 300;
      margin-left: 10px;
    }
  }
`;
export const HeaderActions = styled.div``;
export const ChatMessages = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  flex: 1;
  height: 100%;
  background-color: #dddbd1;
  padding: 20px 40px;
  p {
    width: fit-content;
    background-color: white;
    padding: 12px 24px;
    border-radius: 0.2rem;
    color: #4a4a4a;
    margin-top: 0;
    font-size: 1rem;
    font-weight: 400;
  }
  .me {
    margin-left: auto;
    background-color: #dcf8c6;
  }
`;
export const ChatFooter = styled.div`
  flex: 0.1;
  display: flex;
  align-items: center;
  position: relative;
  .emoji-picker-react {
    position: absolute;
    top: -330px;
    left: 10px;
  }
  padding: 0 40px;
`;
export const SearchWrapper = styled.form`
  flex: 1;
  background-color: white;
  padding: 0 24px;
  border-radius: 3rem;
  input {
    display: block;
    width: 100%;
    height: 10;
    padding: 9px 0;
    border: none;
    font-size: 1rem;
  }
  button {
    display: none;
  }
`;
