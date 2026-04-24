import { useState } from "react";

function Faq({ faq }) {
  const [isShowing, setIsShowing] = useState(false);
  const { id, question, answer } = faq;

  return (
    <li>
      <h4 className={isShowing ? "show" : ""}>
        {question}{" "}
        <button
          className="faq-btn"
          onClick={() => {
            setIsShowing((s) => !s);
          }}
        >
          <i className="fas fa-plus-circle pulse"></i>
        </button>
      </h4>
      <p className={isShowing ? "open" : ""}>{isShowing && answer}</p>
    </li>
  );
}

export default Faq;
