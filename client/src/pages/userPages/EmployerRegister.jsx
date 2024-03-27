import React, { useState } from "react";
import meeting from "../../assets/images/meeting.jpeg";
import Validation from "./Validation";
import axios from "axios";
import { toast } from "react-hot-toast";

const EmployerRegister = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
    userType: "employer",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log("values", values); // Add this line
  };

  const handleBlur = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit called"); // Add this line
    const validationErrors = Validation(values);
    console.log("validationErrors", validationErrors); // Add this line
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("user/register", values)
        .then((response) => {
          if (response.data.error) {
            setErrors({ api: response.data.error });
          } else {
            toast.success("Registered successfully");
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log("API request failed", error); // Add this line
          setErrors({ api: "Could not connect to API" });
        });
    } else {
      setErrors(validationErrors);
    }
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
              name="name"
              value={values.name}
              className="mb-3 px-3 py-2 border rounded w-full outline-none"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <p className="error">{errors.name}</p>}

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
