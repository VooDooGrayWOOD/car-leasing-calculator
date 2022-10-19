import React from 'react';
import CostCar from "./costCar";
import InitialPayment from "./initialPayment";
import LeaseTerm from "./leaseTerm";
import ResultList from "./resultList";

const RangeList = () => {

    return (
        <div>
            <CostCar />
            <InitialPayment />
            <LeaseTerm />
            <ResultList />
        </div>
    );
};

export default RangeList;