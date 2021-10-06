import React from "react";
import { Box } from "@mui/system";
import { ModalContainer, ModalOverlay, ModalAdNewPerson } from "./Modal.styles";
import db from "../../firebase";

export const ModalNew = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(!open);
  /* Add new person */
  const addNewPerson = () => {
    const name = prompt("name of person");
    db.collection("rooms").add({ name: name });
    setOpen(false);
  };
  return (
    <div>
      <ModalContainer
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleOpen}
        BackdropComponent={ModalOverlay}
      >
        <Box>
          <ModalAdNewPerson onClick={addNewPerson}>
            Add new person
          </ModalAdNewPerson>
        </Box>
      </ModalContainer>
    </div>
  );
};

export default ModalNew;
