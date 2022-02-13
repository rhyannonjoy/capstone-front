import axios from "axios";
import SearchByDate from "../forms/SearchByDate";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "./SubmitQuestionForm.css";

const SubmitQuestionForm = (props) => {
  const [data, setData] = useState("");
  const [isQuestions, setQuestions] = useState("");
  const [isNewQuestion, setNewQuestion] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
  // const postQuestion = () => {
  //   axios
  //     .post("https://techqa-back.herokuapp.com/questions", {
  //       unedited_question: "unedited",
  //       edited_question: "edited",
  //       answer: "answer",
  //       date: "02/13/2022",
  //       topic: "topic",
  //       keywords: "keyword, keyword",
  //       research: "react-docs.com",
  //     })
  //     .then((response) => {
  //       console.log("response", response);
  //       console.log("response data:", response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //       console.log("Error Response:", error.response);
  //     });
  // };

  // useEffect(() => {
  //   postQuestion();
  // }, []);

  // delete a question, call with 'Delete' button

  const getQuestion = (e) => {
    setNewQuestion(e.target.value);
  };

  // get editing help from Grammar Bot API, called with 'Edit' button
  const editQuestion = (question) => {
    const headers = {
      "content-type": process.env.REACT_APP_API_CONTENT_TYPE,
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    };
    console.log(process.env.REACT_APP_API_KEY);

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
      })
      .catch((e) => console.log("Something went wrong :(", e));

    // From your response in the API call, assign a variable to the exact data you need aka the edite
    // text from GrammarBot
    // return that value
  };

  console.log(errors);
  // useEffect was just for testing
  // useEffect(() => {
  //   console.log("in useEffect SQF");
  //   editQuestion();
  // }, []);

  return (
    <div className="form-container">
      <form
        className="submit-form"
        onSubmit={handleSubmit((data) =>
          setData(JSON.stringify(data, null, 2))
        )}
      >
        <nav className="buttons-container">
          <button className="delete-button" type="submit">
            Delete
          </button>
          <button
            className="edit-button"
            onClick={() => editQuestion(isNewQuestion)}
          >
            Edit
          </button>
          <button className="reset-button" type="reset" onClick={() => reset()}>
            Reset
          </button>
          <button className="save-button" type="submit" onClick={handleSubmit}>
            Save
          </button>
          <SearchByDate />
        </nav>
        <div>
          <label>Unedited New Question</label>
          <textarea
            className="unedited-question-field"
            onChange={getQuestion}
            placeholder="Your Question Here"
            type="text"
            // {...register("unedited_question", { required: true })}
            value={isNewQuestion}
            required
          >
            {errors.unedited_question && (
              <p className="error-message">A question is required.</p>
            )}
          </textarea>
          <label>Edited New Question</label>
          <textarea
            className="edited-question-field"
            placeholder="Your Edited Question Here"
            type="text"
            {...register("edited_question", { required: false })}
          >
            {errors.unedited_question && (
              <p className="error-message">
                Your unedited question is required.
              </p>
            )}
          </textarea>
          <label>Answer</label>
          <textarea
            className="answer-field"
            placeholder="Your Answer Here"
            type="text"
            {...register("answer", { required: false })}
          ></textarea>
          <label>Date</label>
          <input
            className="date-field"
            placeholder="DD / MM / YYYY"
            {...register("date", { required: true })}
            required
          ></input>
          <label>Keywords</label>
          <input
            className="keywords-field"
            placeholder="Your Keywords Here"
            {...register("keywords", { required: false })}
          ></input>
          <label>Topic</label>
          <input
            className="topic-field"
            placeholder="Question Topic Here"
            {...register("topic", { required: true })}
            required
          ></input>
          <label>Research</label>
          <textarea
            className="research-field"
            placeholder="Sources Here"
            {...register("resources", { required: false })}
          ></textarea>
          <nav className="social-buttons-container">
            <button className="slack-button">Slack</button>
            <button className="stack-overflow-button">Stack Overflow</button>
            <button className="twitter-button">Twitter</button>
          </nav>
        </div>
      </form>
      <div className="saved-questions-container">
        <h3 className="saved-questions-header">Saved Questions</h3>
        <div className="questions-container">{displayQuestions()}</div>
        <p className="saved-questions-data">{data}</p>
      </div>
    </div>
  );
};
export default SubmitQuestionForm;
