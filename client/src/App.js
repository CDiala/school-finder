import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ArticleCard from "./components/shared/ArticleCard/ArticleCard";
import graduation from "./images/graduation.png";
import ExtraLargeCard from "./components/shared/ExtraLargeCard/ExtraLargeCard";
import Bookmark from "./components/shared/Bookmark/Bookmark";
import ReadMore from "./components/shared/ReadMore/ReadMore";
import { XLCardController } from "./utils/xlCardController";

function App() {
  return (
    <>
      <Router>
        <ArticleCard />
      </Router>
    </>
  );
}

export default App;
