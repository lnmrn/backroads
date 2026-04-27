import { useState } from "react";
import { faqData } from "../data";
import Faq from "./Faq";
import Heading from "./Heading";

function FaqList() {
  const [currId, setCurrId] = useState(null);

  function handleToggle(id) {
    const activeId = id === currId ? null : id;
    setCurrId(activeId);
  }

  return (
    <section className="section" id="faq">
      <Heading title="More" highlight="info" />
      <div className="faq-container">
        <ul className="faq">
          {faqData.map((f) => (
            <Faq
              key={f.id}
              faq={f}
              currId={currId}
              handleToggle={handleToggle}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FaqList;
