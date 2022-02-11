import axios from "axios";
import SearchByDate from "../forms/SearchByDate";
import useCollapse from "react-collapsed";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "./SubmitQuestionForm.css";

const SubmitQuestionForm = (props) => {
  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState("");
  console.log(errors);
  useEffect(() => {
    const editQuestion = () => {
      const question = {
        text: "i always forget how to go to their",
        language: "en-US",
      };
      const headers = {
        "content-type": "application/x-www-form-urlencoded",
        "x-rapidapi-host": "grammarbot.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      };
      const config = { headers };
      axios
        .post("https://grammarbot.p.rapidapi.com/check", question, config)
        .then((response) => {
          console.log(response.status);
          console.log(response.data);
        })
        .catch((e) => console.log("something went wrong :(", e));
    };
    editQuestion();
  }, []);

  return (
    <div className="form-container">
      <form
        className="submit-form"
        onSubmit={handleSubmit((data) =>
          setData(JSON.stringify(data, null, 2))
        )}
      >
        <nav className="buttons-container">
          <button
            className="hide-button"
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? "Hide" : "Show"}
          </button>
          <button className="reset-button" type="reset" onClick={() => reset()}>
            Reset
          </button>
          <button className="edit-button">Edit</button>
          <button className="save-button" type="submit" onClick={handleSubmit}>
            Save
          </button>
          <SearchByDate />
        </nav>
        <div {...getCollapseProps()}>
          <label>Unedited New Question</label>
          <textarea
            className="unedited-question-field"
            placeholder="Your Question Here"
            type="text"
            {...register("unedited_question", { required: true })}
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
        <p className="saved-questions-data">{data}</p>
      </div>
    </div>
  );
};
export default SubmitQuestionForm;
