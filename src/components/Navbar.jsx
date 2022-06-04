import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-blue z-30 py-5">
      <div className="mx-5 md:mx-28 flex flex-wrap justify-between items-center">
        <div className="flex justify-center items-center text-black cursor-pointer font-bold text-2xl">
          LUGAR
        </div>
        <div className="hidden w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-auto md:font-medium">
          <ul className="flex flex-row space-x-10 text-black uppercase">
            <li
              className="block py-2 pr-5 text-center 
            cursor-pointer hover:text-white duration-300 ease-in-out"
            >
              Home
            </li>
            <li
              className="block py-2 pr-5 text-center 
            cursor-pointer hover:text-white duration-300 ease-in-out"
            >
              About
            </li>
            <li
              className="block py-2 pr-5 text-center
             cursor-pointer hover:text-white duration-300 ease-in-out"
            >
              Project
            </li>
            <li
              className="block py-2 pr-5 text-center
             cursor-pointer hover:text-white duration-300 ease-in-out"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
