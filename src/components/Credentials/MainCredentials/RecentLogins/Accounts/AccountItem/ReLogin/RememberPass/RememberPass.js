import React from "react";
import classes from "./RememberPass.module.css";

const RememberPass = (props, ref) => {
  return (
    <div className={classes.main}>
      <input
        id="reLoginRememberPass"
        type="checkbox"
        className={classes.input}
        ref={ref}
      />
      <label htmlFor={props.id} className={classes.label}>
        Remember password
      </label>
    </div>
  );
};

export default React.forwardRef(RememberPass);
