import logo from "./components/logo.png";
import "./App.css";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
