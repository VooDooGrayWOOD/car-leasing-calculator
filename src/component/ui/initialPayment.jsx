import React from "react";
import Range from "../common/range";
import "./initialPayment.css";

const InitialPayment = () => {
  const data = {
    defaultValue: "13",
    min: "10",
    max: "60",
  };

  // const finalData =

  return (
    <div>
      <form>
        <Range
          className="initialPayment"
          min={data.min}
          max={data.max}
          defaultValue={data.defaultValue}
          label="Первоначальный взнос"
        />
        <input
          className="percentInitialPayment"
          min={data.min}
          max={data.max}
          defaultValue={`${data.defaultValue}%`}
        />
      </form>
    </div>
  );
};

export default InitialPayment;

// <table>
//     <tr><th><center><input type='text' value='1'/></th><th><div id='pic_1'><img width=20 height=20 src='images/check1.png'/></img></div></th></tr>
// </table>
