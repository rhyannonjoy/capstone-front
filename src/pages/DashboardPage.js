import "./DashboardPage.css";
import ContactButton from "../components/buttons/ContactButton";
import HomeButton from "../components/buttons/HomeButton";
import SignOutButton from "../components/buttons/SignOutButton";
import SubmitQuestionForm from "../components/forms/SubmitQuestionForm";
import { useParams } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";

const DashboardPage = () => {
  let { username } = useParams();
  return (
    <div>
      <div>
        <nav className="button-container">
          <h1 className="dashboard-header">
            ✎⎽Welcome to your Dashboard✐⎺
            <em>
              <b>{username}</b>
            </em>
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
      </div>
    </div>
  );
};

export default DashboardPage;
