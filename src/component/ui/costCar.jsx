import React from "react";
import "./costCar.css"
import Range from "../common/range";

const CostCar = () => {

    const data = {
        defaultValue: "3300000",
        min: "1000000",
        max: "6000000",
        step: "100000"
    }

  return (
    <div>
      <Range
          className="costCar"
          minLength="7"
          maxLength="7"
          min={data.min}
          max={data.max}
          step={data.step}
          defaultValue={data.defaultValue}
          label="Стоимость автомобиля"
      />
    </div>
  );
};

export default CostCar;
