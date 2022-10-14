import React from "react";
import Range from "../common/range";

const InitialPayment = () => {
  const data = {
    defaultValue: "420000",
    min: "10",
    max: "60"
  }

  // const finalData = 

  return (
    <div>
        <Range 
          className="initialPayment" 
          min={data.min} 
          max={data.max} 
          defaultValue={data.defaultValue} 
          label="Первоначальный взнос"
        />
    </div>
  );
};

export default InitialPayment;