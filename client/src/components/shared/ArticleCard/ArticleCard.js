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
    header: "test header 1",
    body: `
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.
      You can add webfonts, meta tags, or analytics to this file.
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.
      You can add webfonts, meta tags, or analytics to this file.
    `,
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
            readMore={
              article.body.length >= 300 ? <ReadMore path={"./"} /> : null
            }
          />
        );
      })}
    </div>
  );
};

export default ArticleCard;
