import "./ContactForm.css";
import SubmitButton from "../buttons/SubmitButton";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <label>Name:</label>
        <input
          className="contact-name-field"
          id="name"
          maxLength="40"
          placeholder=" Your Name Here"
          title="Name"
          type="text"
          required
        ></input>
        <p></p>
        <label>Email:</label>
        <input
          className="contact-email-field"
          id="email"
          maxLength="40"
          placeholder=" Your Email Here"
          title="Email"
          type="text"
          required
        ></input>
        <p></p>
        <label>Message:</label>
        <input
          className="contact-message-field"
          id="message"
          maxLength="200"
          placeholder=" Your Message Here"
          title="Message"
          type="text"
          required
        ></input>
        <p></p>
        <SubmitButton />
      </form>
    </div>
  );
};

export default ContactForm;
