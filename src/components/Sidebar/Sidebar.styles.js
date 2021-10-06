import styled from "styled-components";

export const WrapperSidebar = styled.div`
  flex: 0.25;
  border-right: 1px solid #4444;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f6;
  padding: 10px 15px;
`;
export const HeaderActions = styled.div`
  min-width: 10vw;
`;
export const SearchWrapper = styled.div`
  background-color: rgba(252, 252, 252, 0.9);
  padding: 10px 15px;
  border-bottom: 1px solid #f6f6f6;
  .search-group {
    display: flex;
    align-items: center;
    background-color: white;
    min-height: 6vh;
    border-radius: 40px;
    padding: 0 10px;
    .MuiSvgIcon-root {
      cursor: pointer;
      opacity: 0.4;
      font-size: 1.4rem;
    }
    input[type="text"] {
      margin-left: 20px;
      flex: 1;
      border: none;
      font-size: 0.9rem;

      &:focus {
        border: 1px solid transparent !important;
      }
    }
  }
`;
export const SidebarChatWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  flex: 1;
  background-color: #fff;
  scrollbar-width: thin;
`;
