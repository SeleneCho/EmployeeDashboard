import React from "react";
import Box from "@mui/material/Box";
import { Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { closeUpdate, openUpdate } from "../redux/updateSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal({ id }) {
  const [newName, setNewName] = useState("");
  const [newContact, setNewContact] = useState("");
  const [newTeam, setNewTeam] = useState("");
  const [userId, setUserId] = useState("");
  const [isClose, setIsClose] = useState(false);
  const dispatch = useDispatch();
  const { isUpdateOpen } = useSelector((state) => state.update);

  const handleClose = () => {
    dispatch(closeUpdate());
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/student/${id}`, {
      id,
      name: newName,
      contact: newContact,
      team: newTeam,
    });
    dispatch(closeUpdate());
    // setIsClose(true);
    setUserId("");
  };

  return (
    <Modal
      open={isUpdateOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          id="outlined-basic"
          label="New Name"
          variant="outlined"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="New Contact"
          variant="outlined"
          value={newContact}
          onChange={(e) => setNewContact(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="New Team"
          variant="outlined"
          value={newTeam}
          onChange={(e) => setNewTeam(e.target.value)}
        />
        <Button onClick={handleUpdate}>Update</Button>
      </Box>
    </Modal>
  );
}
