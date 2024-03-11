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

  const handleBlur = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 py-4 transition-all ease-in delay-300"
    >
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
    </form>
  );
}
