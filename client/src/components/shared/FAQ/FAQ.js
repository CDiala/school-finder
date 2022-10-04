import { useState } from "react";
import "./FAQ.css";

const FAQ = ({ faqData }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeID, setActiveID] = useState(false);

  return (
    <ul className="faq-container">
      {faqData.map((item, index) => {
        return (
          <li
            key={index}
            id={index}
            className="faq-item"
            onClick={() => {
              if (activeID === index) {
                setIsActive(!isActive);
              } else {
                setActiveID(index);
                setIsActive(true);
              }
            }}
          >
            <div
              className={`faq-question-container ${
                index === activeID && isActive ? "collapsible--expanded" : ""
              }`}
            >
              <p className="faq-question">{item.question}</p>
              <svg
                className="collapsible__arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                // fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.31344 13.0201C5.13593 12.8425 5.11979 12.5648 5.26503 
                  12.369L5.31344 12.313L9.62633 7.99984L5.31344 3.68672C5.13593 
                  3.50921 5.11979 3.23144 5.26503 3.0357L5.31344 2.97962C5.49095 
                  2.8021 5.76873 2.78597 5.96447 2.9312L6.02055 2.97962L10.6872 
                  7.64628C10.8647 7.82379 10.8809 8.10157 10.7356 8.29731L10.6872 
                  8.35339L6.02055 13.0201C5.82528 13.2153 5.5087 13.2153 5.31344 
                  13.0201Z"
                  //   fill="black"
                />
              </svg>
            </div>
            {index === activeID && isActive && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default FAQ;
