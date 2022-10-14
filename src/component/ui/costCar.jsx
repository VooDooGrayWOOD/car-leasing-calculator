import React from "react";
import "./costCar.css"
import Range from "../common/range";

const CostCar = () => {
const data = {
   defaultValue: "3300000",
   min: "1000000",
   max: "6000000"
}



  return (
    <div>
      <Range className="costCar" min={data.min} max={data.max} defaultValue={data.defaultValue} label="Стоимость автомобиля" />
    </div>
  );
};

export default CostCar;
