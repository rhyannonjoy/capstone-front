import "./ContactForm.css";
import SubmitButton from "../buttons/SubmitButton";

const ContactForm = () => {
  return (
    <div className="contact-form-area">
      <form>
        <label>Name: </label>
        <p></p>
        <textarea
          className="name-field"
          id="name"
          maxLength="40"
          placeholder=" Your Name Here"
          title="Name"
          type="text"
          required
        ></textarea>
        <p></p>
        <label>Email:</label>
        <p></p>
        <textarea
          className="email-field"
          id="email"
          maxLength="40"
          placeholder=" Your Email Here"
          title="Email"
          type="text"
          required
        ></textarea>
        <p></p>
        <label>Message: </label>
        <p></p>
        <textarea
          className="message-field"
          id="message"
          maxLength="200"
          placeholder=" Your Message Here (200 Characters Max)"
          title="Message"
          type="text"
          required
        ></textarea>
        <p></p>
        <SubmitButton />
      </form>
    </div>
  );
};

export default ContactForm;
