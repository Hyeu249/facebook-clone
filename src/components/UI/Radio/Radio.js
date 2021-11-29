import React from "react";
import classes from "./Radio.module.css";

const Radio = React.forwardRef((props, ref) => {
  return (
    <div className={`${classes.main} ${props.classMain}`}>
      <label
        htmlFor={props.id}
        className={`${classes.text} ${props.classLabel}`}
      >
        {props.valueLabel}
      </label>
      <input
        id={props.id}
        name={props.name}
        className={`${classes.input} ${props.className}`}
        value={props.valueLabel}
        ref={ref}
        onClick={props.onClick}
        type="radio"
      />
    </div>
  );
});

export default Radio;
