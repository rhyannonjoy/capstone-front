import React, { useState } from "react";

import SubmitQuestionForm from "./SubmitQuestionForm";
import QuestionList from "./QuestionList";
// import Search from "./Search";

const Questions = () => {
  const [userQuestions, setUserQuestions] = useState([]);

  const addQuestionHandler = (question) => {
    setUserQuestions((prevQuestions) => [
      ...prevQuestions,
      { id: Math.random().toString(), ...question },
    ]);
  };

  const removeQuestionHandler = (questionId) => {
    setUserQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== questionId)
    );
  };

  return (
    <div>
      <SubmitQuestionForm onAddQuestion={addQuestionHandler} />

      <section>
        {/* <Search /> */}
        <QuestionList
          questions={userQuestions}
          onRemoveItem={removeQuestionHandler}
        />
      </section>
    </div>
  );
};

export default Questions;
