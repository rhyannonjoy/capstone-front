import React, { useState } from "react";
import useCollapse from "react-collapsed";

import "./SubmitQuestionForm.css";
import EditButton from "../../buttons/EditButton";
import ResetButton from "../../buttons/ResetButton";
import SubmitButton from "../../buttons/SaveButton";

const SubmitQuestionForm = React.memo((props) => {
  const [enteredQuestion, setEnteredQuestion] = useState("");
  const [enteredAnswer, setEnteredAnswer] = useState("");

  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const [formFields, setFormFields] = useState({
    unedited_question: "",
    edited_question: "",
    answer: "",
    date: "",
    keywords: "",
    topic: "",
    research: "",
  });

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

  const onTopicChange = (event) => {
    setFormFields({
      ...formFields,
      topic: event.target.value,
    });
  };

  const onResearchChange = (event) => {
    setFormFields({
      ...formFields,
      research: event.target.value,
    });
  };

  const resetFormFields = () => {
    setFormFields("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddQuestion({ question: enteredQuestion, answer: enteredAnswer });
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler} className="submit-form">
        <nav className="buttons-container">
          <button
            className="hide-button"
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? "Hide" : "Show"}
          </button>
          <ResetButton type="reset" onClick={resetFormFields} />
          <EditButton />
          <SubmitButton />
        </nav>
        <div {...getCollapseProps()}>
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
          <input
            className="date-field"
            placeholder=" Day / Month / Year"
          ></input>
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
        </div>
      </form>
    </div>
  );
});

export default SubmitQuestionForm;
