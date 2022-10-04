import ExtraLargeCard from "../ExtraLargeCard/ExtraLargeCard";
import "./ArticleCard.css";
import src1 from "../../../images/graduation.png";
import src2 from "../../../images/article_img_2.png";
import Bookmark from "../../../components/shared/Bookmark/Bookmark";
import ReadMore from "../../../components/shared/ReadMore/ReadMore";

const articles = [
  {
    src: src1,
    alt: "article 1",
    header: "Why study Medicine???",
    body: `
    When I was much younger, I had wanted to study medicine, but then when I grew up, I realized I had an abject fear of blood. Lol. Dont laugh at me please. I don’t know hen I was much younger, I had wanted to study medicine, but then when I grew up, I realized I had an abject fear of blood. Lol. Dont laugh at me please. I don’t know
    `,
    date: "September 6, 2021",
    datetime: "2022-09-06",
  },
  {
    src: src2,
    alt: "I got the scholarship! Yaay!!",
    header: "test header 2",
    body: `
    I guess you would be wondering why I am this excited. Let me give you gist. By the way, I came with ways on how you can easily get that scholarship. Oh yes, I am that nice. Lol. Back to the gist oo, I have
    `,
    date: "November 12, 2021",
    datetime: "2021-11-12",
  },
];

const ArticleCard = () => {
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
