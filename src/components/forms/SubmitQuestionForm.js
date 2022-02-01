import SubmitButton from "../buttons/SubmitButton";
import "./SubmitQuestionForm.css";

const SubmitQuestionForm = () => {
  return (
    <div>
      <form className="submit-form">
        <label>New Question</label>
        <p></p>
        <textarea placeholder=" Your Question Here"></textarea>
        <p></p>
        <label>Answer</label>
        <p></p>
        <textarea placeholder=" Your Answer Here"></textarea>
        <p></p>
        <label>Date</label>
        <p></p>
        <textarea placeholder=" Day / Month / Year"></textarea>
        <p></p>
        <label>Keywords</label>
        <p></p>
        <textarea placeholder=" Your Keywords Here"></textarea>
        <p></p>
        <label>Topic</label>
        <p></p>
        <textarea placeholder=" Question Topic Here"></textarea>
        <p></p>
        <label>Research</label>
        <p></p>
        <textarea placeholder=" Sources Here"></textarea>
        <p></p>
        <SubmitButton />
      </form>
    </div>
  );
};

export default SubmitQuestionForm;
