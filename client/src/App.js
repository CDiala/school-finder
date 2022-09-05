import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import graduation from "./images/graduation.png";
import ExtraLargeCard from "./components/shared/ExtraLargeCard/ExtraLargeCard";
import TestimonialCard from "./components/shared/TestimonialCard/TestimonialCard";

import { FeatureSchoolList } from "./components/shared/FeatureSchoolCard/FeatureSchoolCard";
import ImageCarousel from "./components/shared/ImageCarousel/ImageCarousel";

function App() {
  const objCarousel = {
    component: <FeatureSchoolList />,
    heading: "Articles",
    note: "I bet you would want to read these articles, selected just for you.",
  };
  return (
    <Router>
      <ImageCarousel
        component={objCarousel["component"]}
        heading={objCarousel["heading"]}
        note={objCarousel["note"]}
      />
    </Router>
  );
}

export default App;
