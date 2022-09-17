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
    date: "12-09-2022",
  },
  {
    src: src2,
    alt: "article 2",
    header: "test header 2",
    body: `
    The build step will place the bundled scripts into the <body> tag.
    To begin the development, run 'npm start' or 'yarn start'.
    To create a production bundle, use 'npm run build' or 'yarn build'.
    The build step will place the bundled scripts into the <body> tag.
    To begin the development, run 'npm start' or 'yarn start'.
    To create a production bundle, use 'npm run build' or 'yarn build'.
    `,
    date: "15-06-2021",
  },
];

const ArticleCard = () => {
  return (
    <div>
      {articles.map((article, index) => {
        return (
          <ExtraLargeCard
            key={index}
            src={article.src}
            alt={article.alt}
            header={article.header}
            body={article.body}
            charLength={300}
            readMore={<ReadMore path={"./"} />}
          />
        );
      })}
    </div>
  );
};

export default ArticleCard;
