import "./SignInPage.css";
import ContactButton from "../components/buttons/ContactButton";
import have_account from "../images/have_account.png";
import HomeButton from "../components/buttons/HomeButton";
import need_account from "../images/need_account.png";
import SignInForm from "../components/forms/SignInForm";
import SignUpForm from "../components/forms/SignUpForm";

const SignInPage = () => {
  return (
    <div>
      <div className="button-container">
        <HomeButton />
        <ContactButton />
      </div>
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
    </div>
  );
};

export default SignInPage;
