import React from "react";
import "./style/costCar.css";
import Range from "../common/range";
import { useDispatch, useSelector } from "react-redux";
import environment from "../../environment/environment";

const CostCar = () => {
  const dispatch = useDispatch();
  const val = useSelector((state) => state.costCar.price);

  const handleChange = (event) => {
    dispatch({ type: "CHANGE_PRICE", payload: event.target.valueAsNumber });
  };

  return (
    <div className="field__wrapper">
      <Range
        className="costCar"
        minLength="7"
        maxLength="7"
        min={environment.priceMin}
        max={environment.priceMax}
        step={environment.priceStep}
        value={val}
        label="Стоимость автомобиля"
        onChange={handleChange}
      />
      <div className="field__unit">₽</div>
    </div>
  );
};

export default CostCar;
