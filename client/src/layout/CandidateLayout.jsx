import { Outlet } from "react-router-dom";

export default function CandidateLayout() {
  return (
    <div className="min-h-screen bg-[#222322] w-full flex flex-col">
      <Outlet />
    </div>
  );
}
