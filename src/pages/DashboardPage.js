import "./DashboardPage.css";
import ContactButton from "../components/buttons/ContactButton";
import HomeButton from "../components/buttons/HomeButton";
import SignOutButton from "../components/buttons/SignOutButton";
import SubmitQuestionForm from "../components/forms/SubmitQuestionForm";
import { useParams } from "react-router-dom";

const DashboardPage = () => {
  let { username } = useParams();
  return (
    <div>
      <div className="dashboard-body">
        <nav className="button-container">
          <h1 className="dashboard-header">
            ・Welcome to your Dashboard・
            <em>
              <b>{username}</b>
            </em>
            ・
          </h1>
          <ContactButton />
          <HomeButton />
          <SignOutButton />
        </nav>
        <div className="submit-form">
          <SubmitQuestionForm />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
