import React, { useState } from "react";
import Validation from "../../pages/userPages/Validation";

export default function EmployerLogin() {
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
    <form
      onClick={handleSubmit}
      className="flex flex-col gap-2 py-4 transition-all ease-in delay-300"
    >
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
    </form>
  );
}
