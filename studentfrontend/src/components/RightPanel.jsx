import React from "react";
import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";

export default function RightPanel() {
  return (
    <section className="w-96 bg-gray-100 rounded-tl-70px overflow-hidden px-8 hidden md:inline">
      <div className="pt-12 flex justify-end space-x-9 items-center">
        <GrNotification size={20} />
        <BiUser size={20} />
        <img
          src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
          alt="user"
          className="h-9 w-9 object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col space-y-3 mt-9">
        <div className="w-full h-28 py-3 rounded-xl items-center justify-center bg-pink-400 text-white">
          <h3 className="font-light w-fit ml-3">New Employees</h3>
          <div className="flex space-x-4">
            <h1 className="text-4xl font-semibold ml-3">10,000</h1>
            <img
              className="w-12 opacity-80 m-0 "
              src="https://www.transparentpng.com/thumb/business-growth-chart/business-graph-business-growth-growth-icon-pictures-8.png"
            />
          </div>
        </div>
      </div>
      <button className="py-3 rounded border border-indigo-400 text-indigo-400 border-dashed  w-full mt-10">
        Add new manager
      </button>
    </section>
  );
}
