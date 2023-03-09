import React from "react";
import "./style/range.css";

const Range = ({
    min,
    max,
    step,
    type,
    label,
    value,
    defaultValue,
    onChange,
}) => {
    const resultValue = value.toLocaleString("ru-RU");
    const getBackgroundSize = () => {
        return { backgroundSize: `${(value * 100) / 10}% 100%` };
    };

    return (
        <>
            <label>{label}</label>
            <div className="rangeDiv">
                <input
                    className="rangeValue"
                    type={type}
                    value={resultValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={onChange}
                />
                <input
                    className="range"
                    type="range"
                    defaultValue={defaultValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={onChange}
                    style={getBackgroundSize() && null}
                />
            </div>
        </>
    );
};

export default Range;
