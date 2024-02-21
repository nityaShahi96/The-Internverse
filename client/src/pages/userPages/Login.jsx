import React from "react";
import { useState } from "react";
import EmployerLogin from "../../components/forms/EmployerLogin";
import StudentLogin from "../../components/forms/StudentLogin";

export default function Login({ isOpen, onClose }) {
  const [showComponent, setShowComponent] = useState("Student");

  const handleComponentClick = (component) => {
    setShowComponent(component);
  };

  const renderComponent = () => {
    if (showComponent === "Student") {
      return <StudentLogin />;
    } else if (showComponent === "Employer") {
      return <EmployerLogin />;
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
      <div className="md:w-[35%] w-[90%] p-4 bg-white rounded-lg">
        <div className="w-full flex justify-end mb-2">
          <button onClick={onClose}>
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

        <div className="flex w-full text-xl font-semibold">
          <div
            className={`
            text-center w-[50%] 
            ${showComponent === "Student" ? "selected" : ""}`}
            onClick={() => handleComponentClick("Student")}
          >
            Student
          </div>
          <div
            className={`
            text-center w-[50%]
            ${showComponent === "Employer" ? "selected" : ""}`}
            onClick={() => handleComponentClick("Employer")}
          >
            Employer
          </div>
        </div>

        <div className="form-container">{renderComponent()}</div>
      </div>

      <style>{`
        .selected {
          padding-bottom: 5px;
          border-bottom: 2px solid #007fff;
          color: #007fff;
        }
      `}</style>
    </div>
  );
}
