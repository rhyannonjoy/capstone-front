import "./ContactForm.css";
import SubmitButton from "./buttons/SubmitButton";

const ContactForm = () => {
  return (
    <div className="contact-form-area">
      <label>Name: </label>
      <p></p>
      <textarea
        type="text"
        name="name"
        placeholder=" Your Name Here"
      ></textarea>
      <p></p>
      <label>Email:</label>
      <p></p>
      <textarea
        type="text"
        name="email"
        placeholder=" Your Email Here"
      ></textarea>
      <p></p>
      <label>Message: </label>
      <p></p>
      <textarea
        className="message-box"
        type="text"
        name="message"
        placeholder=" Your Message Here"
      ></textarea>
      <p></p>
      <SubmitButton />
    </div>
  );
};

export default ContactForm;
