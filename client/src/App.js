import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header/Header";
import { objLinkItems } from "./data/objLinks";
import logo from "./images/logo.svg";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header itemsArray={objLinkItems} logo={logo} />
        <Footer itemsArray={objLinkItems} />
      </Router>
    </>
  );
}

export default App;
