import "./ContactButton.css";
import { useNavigate } from "react-router-dom";

const ContactButton = (props) => {
  let navigate = useNavigate();

  return (
    <button
      className="contact-button"
      onClick={() => {
        navigate("/contact");
      }}
    >
      Contact
    </button>
  );
};

export default ContactButton;
