import "./DashboardPage.css";
import ContactButton from "../components/buttons/ContactButton";
import HomeButton from "../components/buttons/HomeButton";
import SubmitQuestionForm from "../components/forms/SubmitQuestionForm";
import { useParams } from "react-router-dom";

const DashboardPage = () => {
  let { username } = useParams();
  return (
    <div>
      <div className="button-container">
        <ContactButton />
        <HomeButton />
      </div>
      <h1 className="dashboard-header">This is {username}'s Dashboard</h1>
      <div className="submit-form">
        <SubmitQuestionForm />
      </div>
    </div>
  );
};

export default DashboardPage;
