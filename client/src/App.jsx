import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import {
  Home,
  Login,
  CandidateRegister,
  EmployerRegister,
} from "./pages/userPages/index";
import EmployerLayout from "./layout/Employerlayout";
import CandidateLayout from "./layout/CandidateLayout";
import EmployerHome from "./pages/employerPages/Home";
import CandidateHome from "./pages/candidatePages/Home";
import CandidateDetails from "./pages/candidatePages/CandidateDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="candidateRegister" element={<CandidateRegister />} />
        <Route path="employerRegister" element={<EmployerRegister />} />
      </Route>
      <Route path="/employer/" element={<EmployerLayout />}>
        <Route index element={<EmployerHome />} />
      </Route>
      <Route path="/candidate/*" element={<CandidateLayout />}>
        <Route index element={<CandidateHome />} />
      </Route>
      <Route path="/candidateDetails" element={<CandidateDetails />} />
    </Routes>
  );
};

export default App;
