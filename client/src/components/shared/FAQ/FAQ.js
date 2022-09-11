import "./FAQ.css";

const faqData = [
  {
    question: "What is school finder all about?",
    answer: `It's a platform that enables you to get 
        information on different schools that you might be 
        interested in, without you going to different websites 
        to search. It gives you all the information you need, 
        all in one place.`,
  },
  {
    question: "How does the Career Advisory work?",
    answer: `If you don’t have an idea of what course to study 
    at the university, you would answer a few questions about 
    your skills and passion, and what you are good at, and we 
    would suggest some great courses for you.`,
  },
  {
    question: `Can I save schools and courses that I have an 
    interest in, to read at a later time?`,
    answer: `Yes, you can save schools and courses by clicking 
    the bookmark icon on your item of choice.`,
  },
  {
    question: `How do I access my saved pages?`,
    answer: `You can access your saved pages from the navigation
    bar, and from your profile.`,
  },
  {
    question: `How do I check for specific scholarships that I 
    may be interested in?`,
    answer: `You could use the search button on any page to search for scholarships and other things you want to search for.`,
  },
  {
    question: `Do I get notifications when new scholarships are posted?`,
    answer: `You get notifications for scholarships when you sign up 
    or subscribe to our newsletter.`,
  },
  {
    question: `Can I leave a review?`,
    answer: `You can leave a review by going to the testimonials section 
    of the homepage, clicking it and leaving a review.`,
  },
];

const FAQ = () => {
  return (
    <ul className="faq-container">
      {faqData.map((item, index) => {
        return (
          <li key={index} className="faq-item">
            <div
              className="faq-question-container"
              style={{
                paddingTop: `${index === 0 ? "0" : null} `,
                paddingBottom: `${index === faqData.length - 1 ? "0" : null}`,
              }}
            >
              <p className="faq-question">{item.question}</p>
              <svg
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
            <div className="faq-answer collapsible__body">{item.answer}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default FAQ;
