import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";

export const ModalContainer = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiBox-root {
    background-color: #fff;
    padding: 20px 10px;
    border-radius: 0.4rem;
  }
`;
export const ModalOverlay = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
export const ModalAdNewPerson = styled("div")`
  display: block;
  padding: 12px 40px;
  background: none;
  font-size: 1.2rem;
  border: 1px solid transparent;
  cursor: pointer;
`;
