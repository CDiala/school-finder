import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ArticleCard from "./components/shared/ArticleCard/ArticleCard";

function App() {
  return (
    <Router>
      <ArticleCard />
    </Router>
  );
}

export default App;
