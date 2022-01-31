import tell_us from "../images/tell_us.png";
import ContactForm from "../components/ContactForm";
import "./ContactPage.css";
import HomeButton from "../components/buttons/HomeButton";

const ContactPage = () => {
  return (
    <div>
      <nav className="nav-bar">
        <HomeButton />
      </nav>
      <div className="contact-body">
        <img
          src={tell_us}
          className="tell-us-image"
          alt="tell us how we're doin"
        ></img>
        <ContactForm />
      </div>
      <div>
        <footer className="footer-section">
          ©Ada Developers Academy RJR 2022
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;
