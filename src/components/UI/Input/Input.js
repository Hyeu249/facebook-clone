import React, { useState } from "react";
import warningImg from "../../../../src/img/warning.png";
import Eyes from "./Eyes/Eyes";
import classes from "./Input.module.css";

const Input = (props, ref) => {
  //state
  const [type, setType] = useState(props.type);

  //Return JSX
  return (
    <div className={`${classes.main} ${props.classMain}`}>
      <input
        id={props.id}
        type={type}
        name={props.name}
        value={props.value}
        className={`${classes.input} ${props.className}`}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={ref}
        autoComplete={props.autoComplete}
      />

      <label
        htmlFor={props.id}
        className={`${classes.label} ${props.classLabel}`}
      >
        {props.valueLabel}
      </label>

      {props.type === "password" && (
        <Eyes type={type} setType={setType} conditionErr={props.conditionErr} />
      )}

      {props.conditionErr === true && (
        <img
          src={warningImg}
          alt="warning"
          width="15px"
          className={`${classes.warningImg} ${props.classImg}`}
          onClick={props.onImg}
        />
      )}

      {props.textErr && (
        <div className={`${classes.textErr} ${props.classTextErr?.text}`}>
          {props.textErr}
        </div>
      )}

      {props.textErr && (
        <div
          className={`${classes.arrowImg} ${props.classTextErr?.arrow}`}
        ></div>
      )}
    </div>
  );
};

export default React.forwardRef(Input);
