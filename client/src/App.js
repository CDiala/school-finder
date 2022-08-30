import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import graduation from "./images/graduation.png";
import SideCard from "./components/shared/SideCard/SideCard";

function App() {
  return (
    <>
      <Router>
        <SideCard
          path={"/"}
          src={graduation}
          alt={"template"}
          caption={"discover the best school around. ti will vlo drt dsfsgf"}
        />
      </Router>
    </>
  );
}

export default App;
