import React, {useState} from "react";
import "./range.css";

const Range = ({min, max, step, label, defaultValue}) => {
  const [value, setValue] = useState(defaultValue);
  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / 10}% 100%` };
  };

  const handleChange = (e) => {
    setValue(e.target.valueAsNumber);
  };

  return (
    <>
    <label>{label}</label>
    <div className="rangeDiv">
      <input
        className="rangeValue"
        type="number"
        value={value}
        step={step}
        onChange={handleChange}
      />
      <input
        className="range"
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        style={getBackgroundSize()}
      />
    </div>
    </>
  );
};

export default Range;
