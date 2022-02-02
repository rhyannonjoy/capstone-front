import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <div>
      <h3 className="create-account-header">
        <em>I need an account</em>
      </h3>
      <div className="sign-up-form-container">
        <form className="sign-up-form">
          <label>Email:</label>
          <input
            className="sign-up-email-field"
            placeholder=" Your Email Here"
          ></input>
          <p></p>
          <label>Create A Password:</label>
          <input
            className="sign-up-password-field"
            placeholder=" Your Password Here"
          ></input>
          <p></p>
          <button className="create-account-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
