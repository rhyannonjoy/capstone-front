import "./CreateAccountButton.css";
import { useNavigate } from "react-router-dom";

const CreateAccountButton = () => {
  let navigate = useNavigate();
  return (
    <button
      className="create-account-button"
      onClick={() => navigate("/dashboard/username")}
    >
      Create Account
    </button>
  );
};

export default CreateAccountButton;
