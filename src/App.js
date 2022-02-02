import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/navigation/Footer";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard/:username" element={<DashboardPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
