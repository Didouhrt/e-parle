import React, { useState } from "react";
import { FaRegSquareMinus, FaRegSquarePlus } from "react-icons/fa6";
import { Faq_data } from "../../../Utils/Faq_data";
import "./Faq.css";
const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section>
      <div className="container pad_blk4 ">
        <div className="flex_center text_center flex_column ">
          <h2>FAQs</h2>
          <p>Des Réponses à Vos Questions : Simplifiées et Éclaircies.</p>
        </div>
        <div className="flex flex_column pad_blk2 faq_container">
          {Faq_data.map((faqItem, index) => (
            <div key={faqItem.id} className="faq_item">
              <div
                className={`flex_between gap1-2 faq_question ${
                  expandedIndex === index ? "active_question" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h4>{faqItem.question}</h4>
                <span className="faq_icon">
                  {expandedIndex === index ? (
                    <FaRegSquareMinus />
                  ) : (
                    <FaRegSquarePlus />
                  )}
                </span>
              </div>
              {expandedIndex === index && (
                <div className="faq_answer">
                  <p>{faqItem.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
