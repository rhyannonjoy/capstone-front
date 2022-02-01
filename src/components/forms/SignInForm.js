import "./SignInForm.css";

const SignInForm = () => {
  return (
    <div>
      <h3 className="sign-in-form-header">I already have an account</h3>
      <div className="sign-in-form">
        <form>
          <label>Email:</label>
          <p></p>
          <textarea
            className="sign-in-email-field"
            placeholder=" Your Email Here"
          ></textarea>
          <p></p>
          <label>Password:</label>
          <p></p>
          <textarea
            className="sign-in-password-field"
            placeholder=" Your Password Here"
          ></textarea>
          <p></p>
          <p></p>
          <button className="forgot-password-button">Forgot My Password</button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
