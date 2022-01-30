import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const ContactPage = () => (
  <div>
    <h1>CONTACT PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
