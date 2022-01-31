import contact from "../images/contact.png";
import ContactForm from "../components/ContactForm";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-body">
      <img
        src={contact}
        className="contact-image"
        alt="tell us how we're doin"
      ></img>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
