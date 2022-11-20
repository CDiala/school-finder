import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error/Error";
import { errorData } from "./data/errorData";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import { objLinkItems } from "./data/objLinks";
import logo from "./images/logo.svg";
import ScholarshipList from "./pages/ScholarshipList/ScholarshipList";

function App() {
  return (
    <Router>
      <div className="container">
        <Header itemsArray={objLinkItems} logo={logo} />
        {/* <Error objError={errorData[404]} /> */}
        <ScholarshipList />
        <Footer itemsArray={objLinkItems} />
      </div>
    </Router>
  );
}

export default App;
