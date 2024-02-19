import React from "react";
import { NavLink } from "react-router-dom";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex justify-between mb-4">
          <button className="text-blue-500 border-blue-500">Student</button>
        </div>
        <div className="mt-3 text-center">
          <div className="mt-2 px-7 py-3">
            <input
              className="border rounded py-2 px-3 text-grey-darkest w-full mb-3"
              type="email"
              placeholder="Email"
            />
            <input
              className="border rounded py-2 px-3 text-grey-darkest w-full"
              type="password"
              placeholder="Password"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forget password?
              </a>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
              Login
            </button>
            <div className="flex text-xs gap-1 mt-3">
              <p> New to Internshal?</p>
              <div>
                Register <NavLink to="/candidateRegister">(Student)</NavLink>
                <NavLink to="/employerRegister">/ Employer)</NavLink>
              </div>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4">
          <svg
            className="h-6 w-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Login;
