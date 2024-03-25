import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const respond = await axios.get("http://localhost:4000/logout");
      localStorage.removeItem("token");
      navigate("/");
      toast.success(respond.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center mt-12 text-white text-4xl">
      This is employer home page.
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
