import React from "react";
import Range from "../common/range";

const CostCar = () => {
  return (
    <div>
      <p>Стоимость автомобиля</p>
      <Range min="1000000" max="6000000" />
    </div>
  );
};

export default CostCar;
