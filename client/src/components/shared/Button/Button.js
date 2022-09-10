import "./Button.css";

const Button = ({ text, width }) => {
  return (
    <button className="btn" style={{ maxWidth: `${width}px` }}>
      {text}
    </button>
  );
};

export default Button;
