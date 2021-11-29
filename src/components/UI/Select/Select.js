import React from "react";
import classes from "./Select.module.css";

const Select = React.forwardRef(
  (
    { name, id, className, onBlur, onClick, onMouseDown, style, children },
    ref
  ) => {
    return (
      <select
        name={name}
        id={id}
        className={`${classes.main} ${className}`}
        ref={ref}
        onBlur={onBlur}
        onClick={onClick}
        onMouseDown={onMouseDown}
        style={{ ...style }}
      >
        {children}
      </select>
    );
  }
);

export default Select;
