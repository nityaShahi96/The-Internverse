import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    userType: "student",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const errors = Validation(values);
    console.log(errors); // Add this line
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error("Error in form!");
      return;
    }

    toast.success("Successfully Logged In!");
    navigate("/candidateDetails");
  }

  const login = async (e) => {
    e.preventDefault();
    handleSubmit(e);
    if (Object.keys(errors).length > 0) return;
    try {
      await axios.post("http://localhost:4000/user/login", values);
      toast.success("Logged in successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={login} className="flex flex-col gap-2 py-4">
      <div className="inputContainer">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="example@gmail.com"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit" className="btn">
        Login
      </button>

      <button
        type="button"
        className="mt-3 px-4 py-2 bg-white text-primary w-full rounded border border-primary shadow-sm hover:bg-gray-100"
      >
        Sign up with Google
      </button>
    </form>
  );
}

const Validation = (values) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be more than 6 characters";
  }
  return errors;
};
