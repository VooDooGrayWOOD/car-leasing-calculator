import React from "react";
import "./style/leaseTerm.css"
import Range from "../common/range";
import environment from "../../environment/environment";
import {useDispatch, useSelector} from "react-redux";

const LeaseTerm = () => {
    const dispatch = useDispatch()
    const month = useSelector(state => state.leaseTerm.month)
    const handleChangeMonth = (event) => {
        dispatch({type: 'CHANGE_MONTH', payload: event.target.valueAsNumber})
    }
  return (
    <div className="field__wrapper">
      <Range
          min={environment.termMin}
          max={environment.termMax}
          label="Срок лизинга"
          value={month}
          defaultValue={month}
          style={null}
          onChange={handleChangeMonth}
      />
        <div className="field__unit">мес.</div>
    </div>
  );
};

export default LeaseTerm;