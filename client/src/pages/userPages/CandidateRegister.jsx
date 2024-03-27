import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Validation = (values) => {
  const validatePhoneNumber = (phoneNumber) => {
    const numberRegex = /^(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;
    return numberRegex.test(phoneNumber);
  };

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

  if (!values.firstName) {
    errors.firstName = "First Name is required";
  } else if (values.firstName.length < 3) {
    errors.firstName = "First Name must be more than 3 characters";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  } else if (values.lastName.length < 3) {
    errors.lastName = "Last Name must be more than 3 characters";
  }

  return errors;
};

const CandidateRegister = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userType: "student",
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
    const validationErrors = Validation(values);
    console.log("validationErrors", validationErrors); // Add this line
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Sending request to API");
      // if there are no validation errors
      axios
        .post("http://localhost:4000/user/register", values)
        .then((response) => {
          // handle success
          console.log(response);
          toast.success("Registration successful");
        })
        .catch((error) => {
          // handle error
          console.log(error);
          toast.error("Registration failed");
        });
    }
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="text-3xl font-bold mb-7">Sign-up for free</div>
      <div className="w-1/2 border rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mt-2 px-7 py-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="mail@gmail.com"
              name="email"
              value={values.email}
              className="mb-3 px-3 py-2 border rounded w-full outline-none "
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={values.password}
              className="mb-3 px-3 py-2 border rounded w-full outline-none"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="Abhishek"
                  name="firstName"
                  value={values.firstName}
                  className="mb-3 px-3 py-2 border rounded w-full outline-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && (
                  <p className="error">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Sunar"
                  name="lastName"
                  value={values.lastName}
                  className="mb-3 px-3 py-2 border rounded w-full outline-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>
            </div>
            {/* <div className="text-xs gap-1">
              By signing up, you agree to our Terms and Conditions{" "}
            </div> */}
            <button className="mt-5 px-4 py-2 bg-primary text-white w-full rounded hover:bg-blue-400">
              Sign up
            </button>
            <div className="flex items-center justify-between mt-3">
              <hr className="w-full" />{" "}
              <span className="p-2 text-gray-400 mb-1">OR</span>{" "}
              <hr className="w-full" />
            </div>
            <button className="mt-3 px-4 py-2 bg-white text-primary w-full rounded border border-primary shadow-sm hover:bg-gray-100">
              Sign up with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateRegister;
