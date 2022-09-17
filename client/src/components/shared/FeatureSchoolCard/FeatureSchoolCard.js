import "./FeatureSchoolCard.css";
import Rectangle_72 from "../../../images/Rectangle_72.png";
import Rectangle_73 from "../../../images/Rectangle_73.png";
import Rectangle_74 from "../../../images/Rectangle_74.png";
import Rectangle_75 from "../../../images/Rectangle_75.png";

// School details
const schools = [
  {
    school: "University of Ibadan, Oyo State",
    img: Rectangle_72,
    alt: "University of Ibadan logo",
  },
  {
    school: "University of Ilorin, Kwawa State",
    img: Rectangle_73,
    alt: "University of Ilorin logo",
  },
  {
    school: "Lagos State University, Lagos State",
    img: Rectangle_74,
    alt: "Lagos State University logo",
  },
  {
    school: "Covenant University, Ogun State",
    img: Rectangle_75,
    alt: "Covenant University logo",
  },
];

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
