import "./EditQuestionForm.css";
import axios from "axios";
import { useState } from "react";

const EditQuestionForm = () => {
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

  // post a new question to saved questions, call with 'Save' button
  const editSavedQuestion = (e, formFields) => {
    e.preventDefault();
    axios
      .put("https://techqa-back.herokuapp.com/questions/161", {
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

  return (
    <div className="edit-form-container">
      <form className="edit-form">
        <header className="edit-form-header">Edit Your Question</header>
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
          <button
            className="reset-edits-button"
            type="reset"
            onClick={resetFormFields}
          >
            Reset
          </button>
          <button
            className="save-edits-button"
            onClick={(e) => {
              editSavedQuestion(e, formFields);
            }}
          >
            Save Edits
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditQuestionForm;
