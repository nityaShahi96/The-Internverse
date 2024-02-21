import React, { useState } from "react";
import Validation from "../../pages/userPages/Validation";

export default function StudentLogin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <form onClick={handleSubmit} className="flex flex-col gap-2 py-4">
      <div className="inputContainer">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit" className="btn">
        Login
      </button>

      <button
        type="submit"
        className="mt-3 px-4 py-2 bg-white text-primary w-full rounded border border-primary shadow-sm hover:bg-gray-100"
      >
        Sign up with Google
      </button>
    </form>
  );
}
