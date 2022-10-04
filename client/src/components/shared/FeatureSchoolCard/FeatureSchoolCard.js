import "./FeatureSchoolCard.css";
import { schools } from "../../../data/appData";

// Feature School Card
const FeatureSchoolCard = ({ src, alt, school }) => {
  return (
    <figure className="info-card">
      <div className="img-cont">
        <img src={src} alt={alt} />
      </div>
      <figcaption>{school}</figcaption>
    </figure>
  );
};

// Feature School Card List
export const FeatureSchoolList = () => {
  return (
    <div className="flex flex-row info-container">
      {schools.map((school, index) => {
        return (
          <FeatureSchoolCard
            key={index}
            src={school.img}
            alt={school.alt}
            school={school.school}
          />
        );
      })}
    </div>
  );
};

export default FeatureSchoolList;
