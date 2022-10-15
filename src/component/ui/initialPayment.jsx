import React, { useState } from "react";
import Range from "../common/range";
import "./initialPayment.css";


const InitialPayment = () => {
  const dataPayment = {
    defaultValue: "13",
    min: "10",
    max: "60",
  };
  const [value, setValue] = useState(dataPayment.defaultValue);
  console.log(value);

  const handleChange = (e) => {
    setValue(e.target.valueAsNumber);
  };

  return (
    <div>
      <form>
        <Range
          className="initialPayment"
          min={dataPayment.min}
          max={dataPayment.max}
          step="5"
          defaultValue={dataPayment.defaultValue}
          label="Первоначальный взнос"
        />
        <input
          className="percentInitialPayment"
          min={dataPayment.min}
          max={dataPayment.max}
          step="5"
          type="text"
          defaultValue={`${dataPayment.defaultValue}%`}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default InitialPayment;
