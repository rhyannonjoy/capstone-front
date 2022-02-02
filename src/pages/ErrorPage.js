import "./ErrorPage.css";
import ContactButton from "../components/buttons/ContactButton";
import HomeButton from "../components/buttons/HomeButton";
import page_not_found from "../images/page_not_found.png";
import SignInButton from "../components/buttons/SignInButton";

const ErrorPage = () => {
  return (
    <div>
      <div className="error-page-button-container">
        <ContactButton />
        <HomeButton />
        <SignInButton />
      </div>
      <div>
        <img
          src={page_not_found}
          className="page-not-found-image"
          alt="404 Error Page Not Found"
        ></img>
      </div>
    </div>
  );
};

export default ErrorPage;
