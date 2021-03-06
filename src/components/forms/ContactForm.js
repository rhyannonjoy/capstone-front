import "./ContactForm.css";
import SendButton from "../buttons/SendButton";

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
        <div className="send-button-container">
          <SendButton />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
