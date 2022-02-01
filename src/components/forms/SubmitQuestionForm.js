import SubmitButton from "../buttons/SubmitButton";
import "./SubmitQuestionForm.css";

const SubmitQuestionForm = () => {
  return (
    <div>
      <form className="submit-form">
        <label>New Question</label>
        <textarea placeholder=" Your Question Here"></textarea>
        <p></p>
        <label>Answer</label>
        <textarea placeholder=" Your Answer Here"></textarea>
        <p></p>
        <label>Date</label>
        <textarea placeholder=" Day / Month / Year"></textarea>
        <p></p>
        <label>Keywords</label>
        <textarea placeholder=" Your Keywords Here"></textarea>
        <p></p>
        <label>Topic</label>
        <textarea placeholder=" Question Topic Here"></textarea>
        <p></p>
        <label>Research</label>
        <textarea placeholder=" Sources Here"></textarea>
        <SubmitButton />
      </form>
    </div>
  );
};

export default SubmitQuestionForm;
