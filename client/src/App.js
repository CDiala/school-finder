import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import graduation from "./images/graduation.png";
import ExtraLargeCard from "./components/shared/ExtraLargeCard/ExtraLargeCard";
import TestimonialCard from "./components/shared/TestimonialCard/TestimonialCard";

import { FeatureSchoolList } from "./components/shared/FeatureSchoolCard/FeatureSchoolCard";
import ImageCarousel from "./components/shared/ImageCarousel/ImageCarousel";
import StyledNumber from "./components/shared/StyledNumber/StyledNumber";
import Button from "./components/shared/Button/Button";

function App() {
  const objCarousel = [1, 2, 3];
  return (
    <Router>
      {/* <StyledNumber number={objCarousel[1]} note={"hi there"} /> */}
      <Button text={"Find School"} width={"268"} />
    </Router>
  );
}

export default App;
