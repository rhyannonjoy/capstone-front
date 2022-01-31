import "./ContactButton.css";
import { useNavigate } from "react-router-dom";

const ContactButton = (props) => {
  console.log(props);
  let history = useNavigate();
  return (
    <button
      className="contact-button"
      onClick={() => props.history.push("/contact")}
    >
      Contact
    </button>
  );
};

export default ContactButton;
