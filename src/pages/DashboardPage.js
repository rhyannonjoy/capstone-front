import "./DashboardPage.css";
import ContactButton from "../components/buttons/ContactButton";
import HomeButton from "../components/buttons/HomeButton";
import SearchByDate from "../components/forms/SearchByDate";
import SearchByKeyword from "../components/forms/SearchByKeyword";
import SearchByTopic from "../components/forms/SearchByTopic";
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
        <div className="search-container">
          <SearchByDate />
          <SearchByKeyword />
          <SearchByTopic />
        </div>
        <SubmitQuestionForm />
        <div></div>
      </div>
    </div>
  );
};

export default DashboardPage;
