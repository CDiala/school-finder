import ExtraLargeCard from "../ExtraLargeCard/ExtraLargeCard";
import "./ArticleCard.css";
import Bookmark from "../../../components/shared/Bookmark/Bookmark";
import ReadMore from "../../../components/shared/ReadMore/ReadMore";

const ArticleCard = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => {
        return (
          <div className="cover">
            <ExtraLargeCard
              key={index}
              src={article.src}
              alt={article.alt}
              header={article.header}
              body={article.body}
              date={article.date}
              dateTime={article.datetime}
              charLength={300}
              readMore={<ReadMore path={"./"} />}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleCard;
