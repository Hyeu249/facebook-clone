import React from "react";
import classes from "./FirstText.module.css";

function FirstText() {
  return (
    <div className={classes.firstText}>
      <span>Your shortcuts</span>
      <a href="https://httpstatuses.com/" className={classes.modify}>
        Edit
      </a>
    </div>
  );
}

export default FirstText;
