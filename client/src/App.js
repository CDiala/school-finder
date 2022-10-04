import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FAQ from "./components/shared/FAQ/FAQ";
import FeatureSchoolList from "./components/shared/FeatureSchoolCard/FeatureSchoolCard";
import { faqData } from "./data/appData";

function App() {
  return (
    <Router>
      <FAQ faqData={faqData} />
      <FeatureSchoolList />
    </Router>
  );
}

export default App;
