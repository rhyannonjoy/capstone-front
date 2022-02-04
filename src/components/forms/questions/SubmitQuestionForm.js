import React, { useState } from "react";

import "./SubmitQuestionForm.css";
import HideQuestionFormButton from "../../buttons/HideQuestionFormButton";
import ResetButton from "../../buttons/ResetButton";
import SubmitButton from "../../buttons/SubmitButton";

const SubmitQuestionForm = React.memo((props) => {
  const [enteredQuestion, setEnteredQuestion] = useState("");
  const [enteredAnswer, setEnteredAnswer] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddQuestion({ question: enteredQuestion, answer: enteredAnswer });
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler} className="submit-form">
        <label>New Question</label>
        <textarea
          className="question-field"
          placeholder="Your Question Here"
          type="text"
          id="title"
          value={enteredQuestion}
          onChange={(event) => {
            setEnteredQuestion(event.target.value);
          }}
        ></textarea>
        <label>Answer</label>
        <textarea
          className="answer-field"
          placeholder="Your Answer Here"
          type="text"
          id="answer"
          value={enteredAnswer}
          onChange={(event) => {
            setEnteredAnswer(event.target.value);
          }}
        ></textarea>
        <label>Date</label>
        <input className="date-field" placeholder=" Day / Month / Year"></input>
        <label>Keywords</label>
        <input
          className="keywords-field"
          placeholder="Your Keywords Here"
        ></input>
        <label>Topic</label>
        <input
          className="topic-field"
          placeholder="Question Topic Here"
        ></input>
        <label>Research</label>
        <textarea
          className="research-field"
          placeholder="Sources Here"
        ></textarea>
        <nav className="buttons-container">
          <HideQuestionFormButton />
          <ResetButton />
          <SubmitButton />
        </nav>
      </form>
    </div>
  );
});

export default SubmitQuestionForm;
