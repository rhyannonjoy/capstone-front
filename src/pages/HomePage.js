import "./HomePage.css";
import ContactButton from "../components/buttons/ContactButton";
import description from "../images/description.png";
import logo from "../images/logo.png";
import SignInButton from "..//components/buttons/SignInButton";

const HomePage = (props) => {
  return (
    <div className="App">
      <nav className="button-container">
        <ContactButton />
        <SignInButton />
      </nav>
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img
          src={description}
          className="App-description"
          alt="description"
        ></img>
      </section>
    </div>
  );
};

export default HomePage;
