import "./FormInput.css";

const FormInput = ({
  value,
  onChange,
  className,
  placeholder,
  type,
  name,
  id,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
    />
  );
};

export default FormInput;
