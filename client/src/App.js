import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ArticleCard from "./components/shared/ArticleCard/ArticleCard";
import graduation from "./images/graduation.png";
import ExtraLargeCard from "./components/shared/ExtraLargeCard/ExtraLargeCard";
import Bookmark from "./components/shared/Bookmark/Bookmark";
import ReadMore from "./components/shared/ReadMore/ReadMore";
import { XLCardController } from "./utils/xlCardController";
import { Login } from "./pages/Login/Login";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import { objLinkItems } from "./data/objLinks";
import logo from "./images/logo.svg";

function App() {
  return (
    <>
      <Router>
        <div className="header-container">
          <Header itemsArray={objLinkItems} logo={logo} />
        </div>
        {/* <ArticleCard /> */}
        <Login />
        <Footer itemsArray={objLinkItems} />
      </Router>
    </>
  );
}

export default App;
