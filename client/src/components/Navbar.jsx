import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "../pages/userPages/Login";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center border-b px-36 shadow-sm py-6">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center gap-2">
          <span className="w-10 h-10 bg-primary rounded-full"></span>
          <span className="text-primary italic font-bold text-2xl">
            Internverse
          </span>
        </div>

        <div className="flex gap-6 text-[15px] font-semibold text-[#777] ">
          <NavLink to="/" className="hover:text-primary">
            Internships
          </NavLink>

          <NavLink to="/" className="hover:text-primary">
            Jobs
          </NavLink>

          <NavLink to="/" className="hover:text-primary">
            Contact
          </NavLink>
        </div>
      </div>

      <div className="flex items-center space-x-3 font-semibold">
        <div
          onClick={() => setIsOpen(true)}
          className="py-1 text-sm px-3 text-primary rounded border border-primary hover:bg-secondary hover:text-white hover:border-secondary transition duration-300 cursor-pointer"
        >
          Login
        </div>

        <NavLink to="/candidateRegister">
          <div className="py-1 px-2 text-sm  text-white border border-primary bg-primary rounded hover:bg-secondary hover:border-secondary transition duration-300 cursor-pointer">
            Candidate Sign-up
          </div>
        </NavLink>

        <NavLink to="/employerRegister">
          <div className="py-1 px-2 text-sm text-white border border-primary bg-primary rounded hover:bg-secondary hover:border-secondary transition duration-300 cursor-pointer">
            Employer Sign-up
          </div>
        </NavLink>
      </div>

      {isOpen && <Login isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
}
