import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import graduation from "./images/graduation.png";
import ExtraLargeCard from "./components/shared/ExtraLargeCard/ExtraLargeCard";
import TestimonialCard from "./components/shared/TestimonialCard/TestimonialCard";

import { FeatureSchoolList } from "./components/shared/FeatureSchoolCard/FeatureSchoolCard";

function App() {
  return (
    <Router>
      <FeatureSchoolList />
    </Router>
  );
}

export default App;
