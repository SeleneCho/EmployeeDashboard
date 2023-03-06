import React from "react";
import {
  BiGridAlt,
  BiCreditCardAlt,
  BiUser,
  BiCalculator,
  BiHomeAlt,
} from "react-icons/bi";
import { RiSettings5Line } from "react-icons/ri";

export default function Sidebar() {
  const menu = [
    { name: "Home", icon: <BiHomeAlt /> },
    { name: "Account", icon: <BiGridAlt /> },
    { name: "Cards", icon: <BiCreditCardAlt /> },
    { name: "Contacts", icon: <BiUser /> },
    { name: "Settings", icon: <RiSettings5Line /> },
  ];

  return (
    <div className="h-screen border-r rounded-r-3xl bg-indigo-400 border-gray-200 w-64 px-9 space-y-24 hidden sm:inline">
      <div className="flex flex-row items-center pt-8">
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1325277/ramadan-moon-clipart-md.png"
          alt="sakir"
          className="w-8 h-8 mr-3"
        />
        <div className="text-white font-bold text-lg w-fit">By Selene</div>
      </div>
      <div className="space-y-24">
        <div>
          <div className="mb-9 text-white text-xl font-semibold ">Menu</div>
          <ul className="space-y-7">
            {menu.map((val, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-row items-center mb-8 py-2 px-4 rounded-lg font-light hover:bg-indigo-500 text-white hover:scale-110 cursor-pointer transition ease-in-out delay-100"
                >
                  <div className="mr-5">{val.icon}</div>
                  <div className="m-0">{val.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
