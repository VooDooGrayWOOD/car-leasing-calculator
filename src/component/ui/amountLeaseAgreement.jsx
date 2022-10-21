import React from "react";

const AmountLeaseAgreement = ({ initialPay, month, result }) => {
  const resultAmountLeaseAgreement = () => {
    const data = initialPay + month * Math.round(result);
    return data;
  };
  return (
    <>
      <div>Сумма договора лизинга</div>
      <div className="result__sum">
        {String(
          Math.round(resultAmountLeaseAgreement()).toLocaleString("ru-RU")
        )}
        <span>₽</span>
      </div>
    </>
  );
};

export default AmountLeaseAgreement;
