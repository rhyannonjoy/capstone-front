import "./HomePage.css";
import description from "../images/description.png";
import logo from "../images/logo.png";
import ContactButton from "../components/ContactButton";
import SignIn from "../components/SignInButton";

const HomePage = (props) => {
  return (
    <div className="App">
      <nav className="nav-bar">
        <ContactButton />
        <SignIn className="sign-in-button" />
      </nav>
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img
          src={description}
          className="App-description"
          alt="description"
        ></img>
      </section>
      <footer className="footer-section">
        ©Ada Developers Academy RJR 2022
      </footer>
    </div>
  );
};

export default HomePage;
