import { xlCardData } from "../data/cardData";
import graduation from "../images/graduation.png";
import ExtraLargeCard from "../components/shared/ExtraLargeCard/ExtraLargeCard";
import Bookmark from "../components/shared/Bookmark/Bookmark";
import ReadMore from "../components/shared/ReadMore/ReadMore";

export const XLCardController = () => {
  return (
    <>
      {xlCardData.map((item, index) => {
        return (
          <ExtraLargeCard
            key={index}
            src={graduation}
            alt={"template"}
            header={item.header}
            body={item.body}
            charLength={200}
            readMore={<ReadMore path={"./"} />}
            bookmark={<Bookmark />}
          />
        );
      })}
      ;
    </>
  );
};
