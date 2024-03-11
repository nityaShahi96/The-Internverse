import React, { useState } from "react";
import meeting from "../../assets/images/meeting.jpeg";
import Validation from "./Validation";

const EmployerRegister = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div className="flex justify-between w-full items-center mt-16">
      <div>
        <img src={meeting} width={800} height={600} alt="Meeting"></img>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-5 border w-96 shadow-md rounded-md bg-white mb-10"
      >
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Sign-up for free
          </h3>
          <div className="mt-2 px-7 py-3">
            <input
              type="email"
              placeholder="company@gmail.com"
              name="email"
              value={values.email}
              className="mb-3 px-3 py-2 border rounded w-full outline-none "
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              className="mb-3 px-3 py-2 border rounded w-full outline-none"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={values.fullName}
              className="mb-3 px-3 py-2 border rounded w-full outline-none"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}

            <input
              type="text"
              placeholder="Enter mobile number"
              name="phoneNumber"
              value={values.phoneNumber}
              className="mb-3 px-3 py-2 border rounded w-full outline-none"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
            <button className="mt-5 px-4 py-2 bg-primary text-white w-full rounded hover:bg-blue-400">
              Sign up
            </button>
            <div className="flex items-center justify-between mt-3">
              <hr className="w-full" />{" "}
              <span className="p-2 text-gray-400 mb-1">OR</span>{" "}
              <hr className="w-full" />
            </div>
            <button
              type="submit"
              className="mt-3 px-4 py-2 bg-white text-primary w-full rounded border border-primary shadow-sm hover:bg-gray-100"
            >
              Sign up with Google
            </button>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Already registered?{" "}
              <a href="/login" className="text-primary hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployerRegister;
