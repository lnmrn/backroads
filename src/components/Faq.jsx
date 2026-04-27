import { useState } from "react";

function Faq({ faq, currId, handleToggle }) {
  const { id, question, answer } = faq;

  const isCurrent = id === currId;

  return (
    <li>
      <h4 className={isCurrent ? "show" : ""}>
        {question}{" "}
        <button className="faq-btn" onClick={() => handleToggle(id)}>
          {!isCurrent ? (
            <i className="fas fa-plus-circle pulse"></i>
          ) : (
            <i className="fas fa-minus-circle"></i>
          )}
        </button>
      </h4>
      <p className={isCurrent ? "open" : ""}>{isCurrent && answer}</p>
    </li>
  );
}

export default Faq;
