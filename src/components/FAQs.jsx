import React from "react";
import Question from "./Question";

export default function FAQs() {
  return (
    <>
      <div className="faqs">
        <div className="span-item">
          <span>FAQs</span>
        </div>

        <div className="faq-text">
          <h1>Got any questions?</h1>
        </div>

        <div className="questions">
          <Question
            number="1."
            question="How do I open my account?"
            answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, maiores."
          />

          <Question
            number="2."
            question="How do I get started?"
            answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, maiores."
          />

          <Question
            number="3."
            question="How to create a budget?"
            answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, maiores."
          />

          <Question
            number="4."
            question="Is there a family plan?"
            answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, maiores."
          />
        </div>
      </div>
    </>
  );
}
