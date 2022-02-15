import "./DashboardPage.css";
import ContactButton from "../components/buttons/ContactButton";
import EditQuestionForm from "../components/forms/EditQuestionForm";
import HomeButton from "../components/buttons/HomeButton";
import SignOutButton from "../components/buttons/SignOutButton";
import SubmitQuestionForm from "../components/forms/SubmitQuestionForm";
import { useParams } from "react-router-dom";

const DashboardPage = () => {
  let { username } = useParams();
  return (
    <div>
      <div>
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
      </div>
      <div className="dashboard-body">
        <div className="header">
          <SubmitQuestionForm />
        </div>
        <div>
          <EditQuestionForm />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
