import "./StyledNumber.css";

const StyledNumber = ({ number, note }) => {
  return (
    <div className="number-container">
      <span className="number">{number}</span>
      <p className="note">{note}</p>
    </div>
  );
};

export default StyledNumber;
