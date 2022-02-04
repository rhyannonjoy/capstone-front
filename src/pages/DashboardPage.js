import "./DashboardPage.css";
import ContactButton from "../components/buttons/ContactButton";
import HomeButton from "../components/buttons/HomeButton";
import pencil from "../images/pencil.png";
import Questions from "../components/forms/questions/Questions";
import SearchByDate from "../components/forms/SearchByDate";
import SearchByKeyword from "../components/forms/SearchByKeyword";
import SearchByTopic from "../components/forms/SearchByTopic";
import SignOutButton from "../components/buttons/SignOutButton";
import SubmitQuestionForm from "../components/forms/questions/SubmitQuestionForm";
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
          <div className="search-container">
            <SearchByDate />
            <SearchByKeyword />
            <SearchByTopic />
          </div>
        </div>
        <div className="sidebar">
          <SubmitQuestionForm />
        </div>
        <div className="content">
          <h1 className="content-header">this is just a test</h1>
          <div>
            <Questions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
