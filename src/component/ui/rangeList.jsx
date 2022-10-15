import React from 'react';
import CostCar from "./costCar";
import InitialPayment from "./initialPayment";
import LeaseTerm from "./leaseTerm";
import AmountLeaseAgreement from "./amountLeaseAgreement";
import MonthlyPayment from "./monthlyPayment";

const RangeList = () => {

    return (
        <div>
            <CostCar />
            <InitialPayment />
            <LeaseTerm />
            <AmountLeaseAgreement />
            <MonthlyPayment />
        </div>
    );
};

export default RangeList;