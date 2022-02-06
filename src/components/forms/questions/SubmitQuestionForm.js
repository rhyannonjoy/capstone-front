import React, { useState } from "react";

import "./SubmitQuestionForm.css";
import EditButton from "../../buttons/EditButton";
import HideQuestionFormButton from "../../buttons/HideQuestionFormButton";
import ResetButton from "../../buttons/ResetButton";
import SubmitButton from "../../buttons/SaveButton";

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
        <nav className="buttons-container">
          <HideQuestionFormButton />
          <ResetButton />
          <EditButton />
          <SubmitButton />
        </nav>
        <label>Unedited New Question</label>
        <textarea
          className="question-field"
          placeholder="Your Question Here"
          type="text"
          id="new_question"
          value={enteredQuestion}
          onChange={(event) => {
            setEnteredQuestion(event.target.value);
          }}
        ></textarea>
        <label>Edited New Question</label>
        <textarea
          className="edited-question-field"
          placeholder="Your Edited Question Here"
          type="text"
          id="new_edited_question"
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
      </form>
    </div>
  );
});

export default SubmitQuestionForm;
