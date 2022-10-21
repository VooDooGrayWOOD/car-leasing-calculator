import React from "react";
import "./style/monthlyPayment.css";

const MonthlyPayment = ({ result }) => {
  return (
    <div className="result">
      <div className="result__label">Ежемесячный платеж от</div>
      <div className="result__sum">
        {String(Math.round(result).toLocaleString("ru-RU"))}
        <span>₽</span>
      </div>
    </div>
  );
};

export default MonthlyPayment;
