import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FAQ from "./components/shared/FAQ/FAQ";

function App() {
  return (
    <Router>
      <FAQ />
    </Router>
  );
}

export default App;
