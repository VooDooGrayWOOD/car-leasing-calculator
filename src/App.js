import React from "react";
import "./App.css";
import Heading from "./component/ui/heading";
import CostCar from "./component/ui/costCar";
import InitialPayment from "./component/ui/initialPayment";
import LeaseTerm from "./component/ui/leaseTerm";
import AmountLeaseAgreement from "./component/ui/amountLeaseAgreement";
import MonthlyPayment from "./component/ui/monthlyPayment";
import Button from "./component/common/button";

const App = () => {
  return (
    <div>
      <Heading />
      <CostCar />
      <InitialPayment />
      <LeaseTerm />
      <AmountLeaseAgreement />
      <MonthlyPayment />
      <Button />
    </div>
  );
};

export default App;
