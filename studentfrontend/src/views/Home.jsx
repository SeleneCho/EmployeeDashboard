import React, { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Modal, Paper } from "@mui/material";
import axios from "axios";
import UpdateModal from "../components/UpdateModal";
import { useDispatch, useSelector } from "react-redux";
import { openUpdate } from "../redux/updateSlice";
import { BiSearch } from "react-icons/bi";
import Card from "../components/Card";
import { GrAdd } from "react-icons/gr";

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

export default function Home() {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [team, setTeam] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const { isUpdateOpen } = useSelector((state) => state.update);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, email, team, contact };
    console.log(student);
    fetch("http://localhost:8081/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student added");
    });
    setName("");
    setContact("");
    setEmail("");
    setTeam("");
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (id) => {
    // //console.log(student);
    // setOpen(true);
    dispatch(openUpdate());
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
      <div className="flex flex-col w-full space-y-10 px-16 pt-14 h-screen overflow-y-scroll ">
        <div className="text-5xl font-extrabold w-fit ml-0 h-fit mt-0">
          Employee Dashboard
        </div>
        <div className="border border-gray-300 rounded-lg w-full flex items-center py-3 px-3 ">
          <BiSearch className="mr-2" />
          <input type={"text"} className="flex-1 " placeholder="Search" />
        </div>

        <h1 className="font-bold text-3xl w-fit ml-0">Add Member</h1>

        <Box
          className="flex"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Team"
            variant="outlined"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <button
          variant="contained"
          className="bg-indigo-700 rounded-lg text-white h-14 hover:scale-105 cursor-pointer transition ease-in-out delay-100"
          onClick={handleClick}
        >
          Add
        </button>

        <h2 className="font-bold text-3xl w-fit ml-0 mb-3">All Members</h2>
        <div className="overflow-y-scroll">
          {students.map((student) => (
            <>
              <Card
                id={student.id}
                name={student.name}
                email={student.email}
                contact={student.contact}
                team={student.team}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
