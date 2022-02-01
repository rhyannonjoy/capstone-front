import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <div>
      <h3 className="create-account-header">
        <em>
          <b>I need an account</b>
        </em>
      </h3>
      <div className="sign-up-form">
        <form>
          <label>Email:</label>
          <p></p>
          <textarea
            className="sign-up-email-field"
            placeholder=" Your Email Here"
          ></textarea>
          <p></p>
          <label>Create A Password:</label>
          <p></p>
          <textarea
            className="sign-up-password-field"
            placeholder=" Your Password Here"
          ></textarea>
          <p></p>
          <p></p>
          <button className="create-account-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
