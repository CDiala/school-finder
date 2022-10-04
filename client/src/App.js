import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import { objLinkItems } from "./data/objLinks";
import logo from "./images/logo.svg";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Header itemsArray={objLinkItems} logo={logo} />
      <Login />
      <Footer itemsArray={objLinkItems} />
    </Router>
  );
}

export default App;
