import HomeButton from "../components/buttons/HomeButton";
import have_account from "../images/have_account.png";
import need_account from "../images/need_account.png";
import SignInForm from "../components/forms/SignInForm";
import SignUpForm from "../components/forms/SignUpForm";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div>
      <nav className="nav-bar">
        <HomeButton />
      </nav>

      <div className="container">
        <div classname="column">
          <img
            className="need-account-image"
            src={need_account}
            alt="raised hand"
          ></img>
        </div>
        <div className="column">
          <SignUpForm />
        </div>
        <div className="column">
          <SignInForm />
        </div>
        <div className="column">
          <img
            className="have-account-image"
            src={have_account}
            alt="thumbs-up"
          ></img>
        </div>
      </div>

      <div>
        <footer className="footer-section">
          ©Ada Developers Academy RJR 2022
        </footer>
      </div>
    </div>
  );
};

export default SignInPage;
