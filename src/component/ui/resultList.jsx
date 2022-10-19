import React from 'react';
import "./style/result.css"
import AmountLeaseAgreement from "./amountLeaseAgreement";
import MonthlyPayment from "./monthlyPayment";
import {useSelector} from "react-redux";
import environment from "../../environment/environment";

const ResultList = () => {
    const carPrice = useSelector(state => state.costCar.price)
    const initialPay = useSelector(state => state.initialPayment.payment)
    const month = useSelector(state => state.leaseTerm.month)

    const result = () => {
        const interestRate = environment.interestRate / 100
        const data = (carPrice - initialPay) * ((interestRate
                * Math.pow((1 + interestRate), month))
            / (Math.pow((1+ interestRate), month) - 1 ))
        return data
    }

    return (
        <div className="result">
            <AmountLeaseAgreement
                initialPay={initialPay}
                month={month}
                result={result()}
            />
            <MonthlyPayment
                result={result()}
            />
        </div>
    );
};

export default ResultList;