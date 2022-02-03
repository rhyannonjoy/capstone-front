import "./SignOutButton.css";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  let navigate = useNavigate();
  return (
    <button
      className="sign-out-button"
      onClick={() => {
        navigate("/");
      }}
    >
      Sign∙Out
    </button>
  );
};

export default SignOutButton;
