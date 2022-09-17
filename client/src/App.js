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
        {/* <ExtraLargeCard
          src={graduation}
          alt={"template"}
          header="hello header"
          body={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa et, omnis atque rerum vel alias harum. Atque maiores temporibus facere consequuntur perferendis eos, quod quia hic, harum ipsum unde iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa et, omnis atque rerum vel alias harum. Atque maiores temporibus facere consequuntur perferendis eos, quod quia hic,`}
          charLength={300}
          readMore={<ReadMore path={"./"} />}
          bookmark={<Bookmark />}
        /> */}
        <XLCardController />
      </Router>
    </>
  );
}

export default App;
