import "./SignInForm.css";

const SignInForm = () => {
  return (
    <div>
      <h3 className="sign-in-form-header">I already have an account</h3>
      <div className="sign-in-form-container">
        <form className="sign-in-form">
          <label>Email:</label>
          <input
            className="sign-in-email-field"
            placeholder=" Your Email Here"
          ></input>
          <p></p>
          <label>Password:</label>
          <input
            className="sign-in-password-field"
            placeholder=" Your Password Here"
            type="password"
          ></input>
          <p></p>
          <button className="forgot-password-button">Forgot My Password</button>
          <button className="sign-in-form-button">Sign∙In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
