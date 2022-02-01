import "./SignInButton.css";
import { useNavigate } from "react-router-dom";

const SignInButton = () => {
  let navigate = useNavigate();
  return (
    <button
      className="sign-in-button"
      onClick={() => {
        navigate("/signin");
      }}
    >
      Sign∙In
    </button>
  );
};

export default SignInButton;
