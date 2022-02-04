import React from "react";

// import "./QuestionList.css";

const QuestionList = (props) => {
  return (
    <section className="question-list">
      <h2>Saved Questions</h2>
      <ul>
        {props.questions.map((ig) => (
          <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
            <li>{ig.question}</li>
            <li>{ig.answer}</li>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuestionList;
