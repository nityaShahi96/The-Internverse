import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import Home from "./pages/userPages/Home";

import Login from "./pages/userPages/Login";
import EmployerRegister from "./pages/userPages/EmployerRegister";
import CandidateRegister from "./pages/userPages/CandidateRegister";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="candidateRegister" element={<CandidateRegister />} />
        <Route path="employerRegister" element={<EmployerRegister />} />
      </Route>
    </Routes>
  );
};

export default App;
