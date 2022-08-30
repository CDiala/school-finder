import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import loc_2 from "./images/loc_2.png";
import graduation from "./images/graduation.png";
import SideCard from "./components/shared/SideCard/SideCard";
import ScholarshipCard from "./components/shared/ScholarshipCard/ScholarshipCard";
import { trimString } from "./utils/formatter";

function App() {
  return (
    <>
      <Router>
        {/* <SideCard
          path={"/"}
          src={graduation}
          alt={"template"}
          caption={"discover the best school around. ti will vlo drt dsfsgf"}
        /> */}
        <ScholarshipCard
          src={loc_2}
          alt={"scholarship template"}
          text={trimString(
            "find the cheapest scover the quick brown fox jumps over the lazy dog the best school around. t school around",
            50
          )}
          path={"./"}
        />
      </Router>
    </>
  );
}

export default App;
