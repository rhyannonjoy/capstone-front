import "./HomePage.css";
import description from "../components/description.png";
import logo from "../components/logo.png";
import Contact from "../components/Contact";
import SignIn from "../components/SignIn";

const HomePage = () => (
  <div className="App">
    <nav className="nav-bar">
      <Contact />
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
    <footer className="footer-section">©Ada Developers Academy RJR 2022</footer>
  </div>
);

export default HomePage;
