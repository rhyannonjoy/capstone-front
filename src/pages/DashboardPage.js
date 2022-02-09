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
        <div className="header">
          <div className="search-container">
            <h5 className="search-container-header">Search Stored Questions</h5>
            <SearchByDate />
            <SearchByKeyword />
            <SearchByTopic />
          </div>
        </div>
        <div className="sidebar">
          <SubmitQuestionForm />
        </div>
        <div className="content">
          <h1>data goes here.</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
