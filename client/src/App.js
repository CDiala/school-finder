import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import graduation from "./images/graduation.png";
import ExtraLargeCard from "./components/shared/ExtraLargeCard/ExtraLargeCard";
import TestimonialCard from "./components/shared/TestimonialCard/TestimonialCard";
import testimonial2 from "./images/testimonial 2.png";

function App() {
  const testament = {
    testimony:
      "The career advice is exceptional. It gives you a list of courses that would be great for you. I had a course to study in mind, but I just needed to test that feature. And the course I had in mind was part of the 3 suggestions given.",
    names: "Yosef Otu",
    status: "Secondary school graduate",
    image: testimonial2,
  };
  return (
    <>
      <Router>
        {/* <ExtraLargeCard
          src={graduation}
          alt={"template"}
          header="hello header"
          body={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
          et, omnis atque rerum vel alias harum. Atque maiores temporibus facere
          consequuntur perferendis eos, quod quia hic, harum ipsum unde iste.`}
        /> */}
        <TestimonialCard testament={testament} />
      </Router>
    </>
  );
}

export default App;
