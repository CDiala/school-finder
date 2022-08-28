import "./Input.css";

const Input = ({ src, alt, placeholder }) => {
  return (
    <div className="input-group">
      <input type="email" placeholder={placeholder} />
      <button>
        <img className="arrow" src={src} alt={alt} />
      </button>
    </div>
  );
};

export default Input;
