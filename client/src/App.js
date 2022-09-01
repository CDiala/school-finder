import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import graduation from "./images/graduation.png";
import ExtraLargeCard from "./components/shared/ExtraLargeCard/ExtraLargeCard";

function App() {
  return (
    <>
      <Router>
        <ExtraLargeCard
          src={graduation}
          alt={"template"}
          header="hello header"
          body={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
          et, omnis atque rerum vel alias harum. Atque maiores temporibus facere
          consequuntur perferendis eos, quod quia hic, harum ipsum unde iste.`}
        />
      </Router>
    </>
  );
}

export default App;
