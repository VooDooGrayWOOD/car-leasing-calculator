import React from "react";
import Range from "../common/range";
import "./style/initialPayment.css";
import environment from "../../environment/environment";
import { useDispatch, useSelector } from "react-redux";

const InitialPayment = () => {
  const dispatch = useDispatch();

  const payment = useSelector((state) => state.initialPayment.payment);
  const percent = useSelector((state) => state.initialPayment.percent);
  const carPrice = useSelector((state) => state.costCar.price);

  const handleChangePercent = (event) => {
    dispatch({ type: "CHANGE_PERCENT", payload: event.target.valueAsNumber });
  };

  const paymentCar = () => {
    return Math.round(carPrice * (percent / 100));
  };

  const handleChangePayment = () => {
    dispatch({ type: "CHANGE_PAYMENT", payload: paymentCar() });
  };

  return (
    <div className="field__wrapper">
      <Range
        className="initialPayment"
        value={payment}
        min={environment.feeMin}
        max={environment.feeMax}
        step="5"
        label="Первоначальный взнос"
        onChange={handleChangePercent}
      />
      <input
        className="percentInitialPayment"
        type="text"
        // defaultValue={percent}
        value={`${percent}%`}
        onChange={handleChangePayment()}
      />
    </div>
  );
};

export default InitialPayment;
