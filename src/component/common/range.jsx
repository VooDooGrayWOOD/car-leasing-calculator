import React, { useState } from "react";
import "./range.css";

const Range = () => {
  const [value, setValue] = useState(0);

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / 10}% 100%` };
  };

  const handleChange = (e) => {
    setValue(e.target.valueAsNumber);
  };

  return (
    <div className="rangeDiv">
      <input
        className="rangeValue"
        type="number"
        value={value}
        onChange={handleChange}
      />
      <input
        className="range"
        type="range"
        value={value}
        onChange={handleChange}
        style={getBackgroundSize()}
      />
    </div>
  );
};

export default Range;
