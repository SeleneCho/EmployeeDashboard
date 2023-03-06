import React, { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Modal, Paper, Typography } from "@mui/material";
import axios from "axios";

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

export default function Student() {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [address, setAddress] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8081/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student added");
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (id) => {
    //console.log(student);
    setOpen(true);
    setUserId(id);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/student/${userId}`, {
      id: userId,
      name: newName,
      address: newAddress,
    });
    setOpen(false);
    setUserId("");
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8081/student/${id}`);
  };

  useEffect(() => {
    fetch("http://localhost:8081/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  });

  return (
    <>
      <h1>Add Student</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Student Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Student Address"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Box>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Submit
      </Button>
      <div>
        <h2>Student</h2>
        {students.map((student) => (
          <>
            <Paper>
              Id:{student.id}
              Name:{student.name}
              Address:{student.address}
              <Button onClick={() => handleDelete(student.id)}>Delete</Button>
              <Button onClick={() => handleOpen(student.id)}>Edit</Button>
            </Paper>
            <Modal
              open={open}
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
                  label="New Address"
                  variant="outlined"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                />
                <Button onClick={handleUpdate}>Update</Button>
              </Box>
            </Modal>
          </>
        ))}
      </div>
    </>
  );
}
