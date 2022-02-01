import "./ContactPage.css";
import ContactForm from "../components/forms/ContactForm";
import HomeButton from "../components/buttons/HomeButton";
import SignInButton from "../components/buttons/SignInButton";
import tell_us from "../images/tell_us.png";

const ContactPage = () => {
  return (
    <div className="button-container">
      <HomeButton />
      <SignInButton />
      <div className="contact-body">
        <img
          src={tell_us}
          className="tell-us-image"
          alt="tell us how we're doin"
        ></img>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
