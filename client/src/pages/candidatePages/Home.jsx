import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const respond = await axios.get("http://localhost:4000/logout", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      localStorage.removeItem("token");
      navigate("/");
      toast.success("Logged out successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center mt-12 text-white text-4xl">
      This is Candidate Home
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Home;
