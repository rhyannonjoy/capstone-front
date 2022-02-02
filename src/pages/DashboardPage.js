import "./DashboardPage.css";
import ContactButton from "../components/buttons/ContactButton";
import HomeButton from "../components/buttons/HomeButton";
import pencil from "../images/pencil.png";
import scribble from "../images/scribble.png";
import SubmitQuestionForm from "../components/forms/SubmitQuestionForm";
import { useParams } from "react-router-dom";

const DashboardPage = () => {
  let { username } = useParams();
  return (
    <div className="dashboard-body">
      <div className="button-container">
        <img src={scribble} className="scribble-image" alt="scribble"></img>
        <h1 className="dashboard-header">
          Welcome to your Dashboard, {username}
        </h1>
        <img src={pencil} className="pencil-image" alt="pencil"></img>
        <ContactButton />
        <HomeButton />
      </div>
      <div className="submit-form">
        <SubmitQuestionForm />
      </div>
    </div>
  );
};

export default DashboardPage;
