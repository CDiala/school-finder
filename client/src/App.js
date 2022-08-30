import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header/Header";
import { objLinkItems } from "./data/objLinks";
import logo from "./images/logo.svg";

function App() {
  return (
    <>
      <Router>
        <Header itemsArray={objLinkItems} logo={logo} />
      </Router>
    </>
  );
}

export default App;
