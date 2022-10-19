import React from "react";
import "./range.css";

const Range = ({min, max, step, label, value, defaultValue, onChange}) => {

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / 10}% 100%` };
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
        onChange={onChange}
      />
      <input
        className="range"
        type="range"
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        style={getBackgroundSize()}
      />
    </div>
    </>
  );
};

export default Range;
