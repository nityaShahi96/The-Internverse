import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import Login from "../pages/userPages/Login";

const Navbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setLoginOpen(false);
  };
  return (
    <div className="bg-white shadow-md flex h-[90px] overflow-hidden">
      <div className="flex items-center justify-between w-full mx-auto px-4">
        {/* Left side content */}
        <div className="flex items-center ml-[100px] gap-5">
          <div>
            <NavLink to="/">
              <img src={logo} alt="logo" width={150} height={70} />
            </NavLink>
          </div>
          <div className="flex gap-6 text-[15px] font-semibold text-[#777] ">
            <div>
              <NavLink to="/" className="hover:text-primary">
                Internships
              </NavLink>
            </div>
            <div>
              <NavLink to="/" className="hover:text-primary">
                Jobs
              </NavLink>
            </div>
            <div>
              <NavLink to="/" className="hover:text-primary">
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center mr-[100px] space-x-3  font-semibold">
          <div
            onClick={handleLoginClick}
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
          <Login isOpen={isLoginOpen} onClose={handleCloseLogin} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
