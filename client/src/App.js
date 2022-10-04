import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FAQ from "./components/shared/FAQ/FAQ";
import { faqData } from "./data/faq";

function App() {
  return (
    <Router>
      <FAQ faqData={faqData} />
    </Router>
  );
}

export default App;
