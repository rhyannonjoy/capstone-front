import "./HomeButton.css";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  let navigate = useNavigate();
  return (
    <button className="home-button" onClick={() => navigate("/")}>
      Home
    </button>
  );
};

export default HomeButton;
