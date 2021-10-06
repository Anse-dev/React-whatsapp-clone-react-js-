import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 15px;
  display: flex;
  background-color: rgba(252, 252, 252, 0.9);
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #f6f6f6;
  }
`;
export const ChatInfo = styled.div`
  font-weight: 400;
  margin-left: 20px;
  width: 100%;
  height: 100%;
  margin-right: -15px;
  border-bottom: 1px solid #f3f3f3;
  .chatInfo-inner {
    padding: 10px 0;
    .user-name {
      font-size: 1.2rem;
      text-transform: capitalize;
      color: #37474f;
      font-weight: 300;
      display: block;
      margin-bottom: 2px;
    }

    .MuiSvgIcon-root {
      cursor: pointer;
      opacity: 0.4;
      font-size: 1.4rem;
      margin-top: -5px;
    }
    .lastest-message {
      display: inline-flex;
      align-items: center;
      span {
        opacity: 0.7;
        font-size: 0.9rem;
      }
    }
  }
`;
