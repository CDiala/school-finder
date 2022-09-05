import "./StyledNumber.css";

const StyledNumber = ({ number }) => {
  return (
    <div className="number-container">
      <span className="number">{number}</span>
    </div>
  );
};

export default StyledNumber;
