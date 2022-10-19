import React from "react";

const AmountLeaseAgreement = ({initialPay, month, result}) => {
    console.log(initialPay);
    console.log(month);
    const resultAmountLeaseAgreement = () => {
        const data = initialPay + month * Math.round(result)
        console.log(data)
        return data
    }
    return (
    <div>
      <div>Сумма договора лизинга</div>
        <div className="result__sum">
            {String(Math.round(resultAmountLeaseAgreement()))}
            <span>₽</span>
        </div>

    </div>
  );
};

export default AmountLeaseAgreement;