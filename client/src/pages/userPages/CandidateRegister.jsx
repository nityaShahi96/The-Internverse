import React from "react";

const CandidateRegister = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="text-3xl font-bold mb-7">Sign-up for free</div>
      <div className="w-1/2 border rounded-lg shadow-md p-6">
        <form>
          <div className="mt-2 px-7 py-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="mail@gmail.com"
              className="mb-3 px-3 py-2 border rounded w-full outline-none "
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              className="mb-3 px-3 py-2 border rounded w-full outline-none"
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="Abhishek"
                  className="mb-3 px-3 py-2 border rounded w-full outline-none"
                />
              </div>

              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Sunar"
                  className="mb-3 px-3 py-2 border rounded w-full outline-none"
                />
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
