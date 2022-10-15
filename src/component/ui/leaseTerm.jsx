import React from "react";
import Range from "../common/range";

const LeaseTerm = () => {
    const data = {
        defaultValue: "60",
        min: "1",
        max: "60"
    }
  return (
    <div>
      <Range min={data.min} max={data.max} label="Срок лизинга" defaultValue={data.defaultValue}/>
    </div>
  );
};

export default LeaseTerm;