import React, { useState } from "react";
import axios from "axios";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from "react-swipeable-list";
import { BiTrash } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { openUpdate } from "../redux/updateSlice";
import UpdateModal from "./UpdateModal";

export default function Card({ id, name, email, contact, team }) {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8081/student/${id}`);
  };

  const handleOpen = (id) => {
    dispatch(openUpdate());
    setUserId(id);
  };

  //   const trailingActions = () => (
  //     <TrailingActions>
  //       <SwipeAction
  //         destructive={true}
  //         onClick={() => console.info("swipe action triggered")}
  //       >
  //         <div className="flex items-center px-4">
  //           <BiTrash size={20} color="white" />
  //         </div>
  //       </SwipeAction>
  //       <SwipeAction
  //         destructive={true}
  //         onClick={() => console.info("swipe action triggered")}
  //       >
  //         <div className="flex items-center px-4">
  //           <FiEdit2
  //             onClick={() => handleDelete(student.id)}
  //             size={20}
  //             color="white"
  //           />
  //         </div>
  //       </SwipeAction>
  //     </TrailingActions>
  //   );

  return (
    <>
      <div className="rounded-2xl bg-indigo-700 mb-4 flex">
        <div className="bg-white p-4 rounded-xl border border-gray-200 w-11/12 h-full flex ">
          <div className="text-sm flex items-center space-x-8">
            <div className="text-gray-900 text-lg">{name}</div>
            <div className="text-gray-400 text-xs">{email}</div>
            <div className="text-gray-400 text-xs">{contact}</div>
            <div className="text-gray-400 text-xs">{team}</div>
          </div>
        </div>
        <div className="flex items-center px-4 cursor-pointer hover:scale-105">
          <FiEdit2 size={20} color="white" onClick={() => handleOpen(id)} />
        </div>
        <div className="flex items-center px-4 cursor-pointer hover:scale-110 transition ease-in-out delay-150">
          <BiTrash size={20} color="white" onClick={() => handleDelete(id)} />
        </div>
      </div>
      <UpdateModal id={id} />
    </>
  );
}
