import "./App.css";
import description from "./components/description.png";
import logo from "./components/logo.png";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <SignIn className="sign-in-button" />
        <SignUp />
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
}

export default App;
