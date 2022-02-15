import axios from "axios";
import SearchByDate from "../forms/SearchByDate";
import { useEffect, useState } from "react";
import "./SubmitQuestionForm.css";

const SubmitQuestionForm = () => {
  const [formFields, setFormFields] = useState({
    unedited_question: "",
    edited_question: "",
    answer: "",
    date: "",
    keywords: "",
    topic: "",
    research: "",
  });

  const [isQuestions, setQuestions] = useState("");
  const [isEdits, setEdits] = useState("");

  const onUneditedQuestionChange = (event) => {
    setFormFields({
      ...formFields,
      unedited_question: event.target.value,
    });
  };

  const onEditedQuestionChange = (event) => {
    setFormFields({
      ...formFields,
      edited_question: event.target.value,
    });
  };

  const onAnswerChange = (event) => {
    setFormFields({
      ...formFields,
      answer: event.target.value,
    });
  };

  const onDateChange = (event) => {
    setFormFields({
      ...formFields,
      date: event.target.value,
    });
  };

  const onKeywordsChange = (event) => {
    setFormFields({
      ...formFields,
      keywords: event.target.value,
    });
  };

  const onResearchChange = (event) => {
    setFormFields({
      ...formFields,
      research: event.target.value,
    });
  };

  const onTopicChange = (event) => {
    setFormFields({
      ...formFields,
      topic: event.target.value,
    });
  };

  const resetFormFields = () => {
    setFormFields("");
  };

  // display stored questions, remains in 'Saved Questions' display
  const getQuestions = () => {
    axios
      .get("https://techqa-back.herokuapp.com/questions")
      .then((response) => {
        setQuestions(response.data);
        console.log("Successful API request!");
        console.log(response.data);
      })
      .catch((e) => console.log("Something went wrong :(", e));
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const displayQuestions = () => {
    return isQuestions ? (
      isQuestions.map((question) => {
        return (
          <div key={question.id}>
            <ul>
              <button
                className="delete-button"
                onClick={(e) => deleteQuestion(e, question)}
              >
                Delete
              </button>
              <button className="edit-button">Edit</button>
              <li>
                <b>ID:</b> {question.id}
              </li>
              <li>
                <b>Unedited Question:</b> {question.unedited_question}
              </li>
              <li>
                <b>Edited Question:</b> {question.edited_question}
              </li>
              <li>
                <b>Answer:</b> {question.answer}
              </li>
              <li>
                <b>Date:</b> {question.date}
              </li>
              <li>
                <b>Keywords:</b> {question.keywords}
              </li>
              <li>
                <b>Topic:</b> {question.topic}
              </li>
              <li>
                <b>Research:</b> {question.research}
              </li>
            </ul>
          </div>
        );
      })
    ) : (
      <h3>No questions yet.</h3>
    );
  };

  // post a new question to saved questions, call with 'Save' button
  const postQuestion = (e, formFields) => {
    e.preventDefault();
    axios
      .post("https://techqa-back.herokuapp.com/questions", {
        unedited_question: formFields.unedited_question,
        edited_question: formFields.edited_question,
        answer: formFields.answer,
        date: formFields.date,
        topic: formFields.topic,
        keywords: formFields.keywords,
        research: formFields.research,
      })
      .then((response) => {
        console.log("response", response);
        console.log("response data:", response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
        console.log("Error Response:", error.response);
      });
  };

  // delete a question, call with 'Delete' button
  const deleteQuestion = (e, question_id) => {
    e.preventDefault();
    axios
      .delete("https://techqa-back.herokuapp.com/questions/160")
      .then((response) => {
        console.log(response.status);
        console.log("Successful API request!");
      })
      .catch((e) => console.log("Something went wrong :(", e));
  };

  // edit a question form, call with 'Edit' button -> new form?

  // get editing help from Grammar Bot API, called with 'Grammar Bot' button
  const editQuestion = (e, question) => {
    e.preventDefault();
    const headers = {
      "content-type": process.env.REACT_APP_API_CONTENT_TYPE,
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    };

    const config = { headers };
    axios
      .post(
        `https://grammarbot.p.rapidapi.com/check?text=${question}`,
        { text: `${question}` },
        config
      )
      .then((response) => {
        console.log(response.status);
        console.log("Successful API request!");
        console.log(response.data);
        const grammarEdits = response.data.matches;
        setEdits(grammarEdits);
      })
      .catch((e) => console.log("Something went wrong :(", e));
  };

  const displayEdits = () => {
    return isEdits ? (
      isEdits.map((edit) => {
        return (
          <div key={edit.id}>
            <ul>
              <li>
                <b>Message: </b>
                {edit.message}
              </li>
              <li>
                <b>Replacements: </b>
                {edit.replacements.map((d) => (
                  <>
                    {/* key={d.id} */}
                    {d.value}{" "}
                  </>
                ))}
              </li>
              <li>
                <b>Gramatical Rule: </b> <>{edit.rule.description}</>
              </li>
            </ul>
          </div>
        );
      })
    ) : (
      <h3>No Grammar Bot edits available.</h3>
    );
  };

  return (
    <div className="form-container">
      <form className="submit-form">
        <nav className="buttons-container">
          <button
            className="grammar-bot-button"
            onClick={(e) => editQuestion(e, formFields.unedited_question)}
          >
            Grammar Bot
          </button>
          <button
            className="reset-button"
            type="reset"
            onClick={resetFormFields}
          >
            Reset
          </button>
          <button
            className="save-button"
            onClick={(e) => {
              postQuestion(e, formFields);
            }}
          >
            Save
          </button>
          <SearchByDate />
        </nav>
        <div>
          <label>Unedited New Question</label>
          <textarea
            className="unedited-question-field"
            onChange={onUneditedQuestionChange}
            placeholder="Your Question Here"
            type="text"
            value={formFields.unedited_question}
          ></textarea>
          <label>Edited New Question</label>
          <textarea
            className="edited-question-field"
            onChange={onEditedQuestionChange}
            placeholder="Your Edited Question Here"
            type="text"
            value={formFields.edited_question}
          ></textarea>
          <label>Answer</label>
          <textarea
            className="answer-field"
            onChange={onAnswerChange}
            placeholder="Your Answer Here"
            type="text"
            value={formFields.answer}
          ></textarea>
          <label>Date</label>
          <input
            className="date-field"
            onChange={onDateChange}
            placeholder="DD / MM / YYYY"
            value={formFields.date}
          ></input>
          <label>Keywords</label>
          <input
            className="keywords-field"
            onChange={onKeywordsChange}
            placeholder="Your Keywords Here"
            value={formFields.keywords}
          ></input>
          <label>Topic</label>
          <input
            className="topic-field"
            onChange={onTopicChange}
            placeholder="Question Topic Here"
            value={formFields.topic}
          ></input>
          <label>Research</label>
          <textarea
            className="research-field"
            onChange={onResearchChange}
            placeholder="Sources Here"
            value={formFields.research}
          ></textarea>
          <nav className="social-buttons-container">
            <button className="slack-button">Slack</button>
            <button className="stack-overflow-button">Stack Overflow</button>
            <button className="twitter-button">Twitter</button>
          </nav>
        </div>
      </form>
      <div className="saved-questions-container">
        <h3 className="grammar-suggestions-header">Grammatical Suggestions</h3>
        <div className="grammar-suggestions-container">{displayEdits()}</div>
        <h3 className="saved-questions-header">Saved Questions</h3>
        <div className="questions-container">{displayQuestions()}</div>
      </div>
    </div>
  );
};
export default SubmitQuestionForm;
