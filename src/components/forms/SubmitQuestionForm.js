import useCollapse from "react-collapsed";
import { useForm } from "react-hook-form";
import { useState } from "react";

import "./SubmitQuestionForm.css";
import EditButton from "../buttons/EditButton";

const SubmitQuestionForm = () => {
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

  return (
    <div className="form-container">
      <form
        className="submit-form"
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
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
          <EditButton />
          <button className="save-button" type="submit">
            Save
          </button>
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
            {errors.unedited_question && <p>This is required</p>}
          </textarea>
          <label>Edited New Question</label>
          <textarea
            className="edited-question-field"
            placeholder="Your Edited Question Here"
            type="text"
            {...register("edited_question", { required: true })}
          ></textarea>
          <label>Answer</label>
          <textarea
            className="answer-field"
            placeholder="Your Answer Here"
            type="text"
            {...register("answer", { required: true })}
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
            {...register("keywords", { required: true })}
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
            {...register("resources", { required: true })}
          ></textarea>
          <p>{data}</p>
        </div>
      </form>
    </div>
  );
};

export default SubmitQuestionForm;
