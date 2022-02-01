import "./DashboardPage.css";
import HomeButton from "../components/buttons/HomeButton";
import SubmitQuestionForm from "../components/forms/SubmitQuestionForm";

const DashboardPage = () => {
  return (
    <div>
      <div>
        <nav className="nav-bar">
          <HomeButton />
        </nav>
      </div>
      <div className="submit-form">
        <SubmitQuestionForm />
      </div>
      <div>
        <footer className="footer-section">
          ©Ada Developers Academy RJR 2022
        </footer>
      </div>
    </div>
  );
};

export default DashboardPage;
