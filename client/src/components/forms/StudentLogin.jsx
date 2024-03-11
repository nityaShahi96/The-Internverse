import React, { useState } from "react";
import Validation from "../../pages/userPages/Validation";
import { toast } from "react-hot-toast";

export default function StudentLogin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
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
    const errors = Validation(values);
    console.log(errors); // Add this line
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error("Error in form!");
      return;
    }

    toast.success("Successfully toasted!");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-4">
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
