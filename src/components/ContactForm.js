const ContactForm = () => {
  return (
    <div className="contact-form">
      <label>Name: </label>
      <input type="text" name="name" placeholder="Your Name Here"></input>
      <p></p>
      <label>Email:</label>
      <input type="text" name="email" placeholder="Your Email Here"></input>
      <p></p>
      <label>Message: </label>
      <input type="text" name="message"></input>
      <p></p>
      <input type="submit" value="submit"></input>
    </div>
  );
};

export default ContactForm;
