import "./SendButton.css";

const SendButton = () => {
  return (
    <button
      className="send-button"
      onClick={() => alert("Thank you for your message!")}
      type="submit"
    >
      Send
    </button>
  );
};

export default SendButton;
