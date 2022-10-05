import "./Dropdown.css";

const DropDown = ({ programList }) => {
  return (
    <>
      {programList.map((item, index) => {
        return (
          <div key={index} className="dropdown-group">
            <label className="dropdown-label" htmlFor={item.inputFor}>
              {item.title}
            </label>
            <select
              required
              name={item.inputFor}
              id={item.inputFor}
              className="select-list"
              placeholder={index === 0 && item.list[0].option}
            >
              {item.list.map((item, index) => {
                return (
                  <option
                    key={index}
                    value={item.value}
                    selected={index === 0}
                    disabled={index === 0}
                    hidden={index === 0}
                  >
                    {item.option}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}
    </>
  );
};

export default DropDown;
