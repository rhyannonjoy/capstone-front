import "./EditQuestionForm.css";

const EditQuestionForm = () => {
  return (
    <div className="form-container">
      <form className="edit-form">
        <header className="edit-form-header">Edit Your Question</header>
        <div>
          <label>Unedited New Question</label>
          <textarea
            className="unedited-question-field"
            // onChange={onUneditedQuestionChange}
            placeholder="Your Question Here"
            type="text"
            // value={formFields.unedited_question}
          ></textarea>
          <label>Edited New Question</label>
          <textarea
            className="edited-question-field"
            // onChange={onEditedQuestionChange}
            placeholder="Your Edited Question Here"
            type="text"
            // value={formFields.edited_question}
          ></textarea>
          <label>Answer</label>
          <textarea
            className="answer-field"
            // onChange={onAnswerChange}
            placeholder="Your Answer Here"
            type="text"
            // value={formFields.answer}
          ></textarea>
          <label>Date</label>
          <input
            className="date-field"
            // onChange={onDateChange}
            placeholder="DD / MM / YYYY"
            // value={formFields.date}
          ></input>
          <label>Keywords</label>
          <input
            className="keywords-field"
            // onChange={onKeywordsChange}
            placeholder="Your Keywords Here"
            // value={formFields.keywords}
          ></input>
          <label>Topic</label>
          <input
            className="topic-field"
            // onChange={onTopicChange}
            placeholder="Question Topic Here"
            // value={formFields.topic}
          ></input>
          <label>Research</label>
          <textarea
            className="research-field"
            // onChange={onResearchChange}
            placeholder="Sources Here"
            // value={formFields.research}
          ></textarea>
          <button className="save-edits-button">Save Edits</button>
        </div>
      </form>
    </div>
  );
};

export default EditQuestionForm;
