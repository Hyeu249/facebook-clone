import React from "react";
import { DotIcon } from "../../../../../../../icons/iconsFacebook";
import classes from "./PolicyItem.module.css";

function PolicyItem({ text }) {
  // const condition = text === "Quyền riêng tư" || text === "quảng cáo";

  //Return JSX
  return (
    <div className="flex">
      <DotIcon className={classes.dot} />
      <a href="https://httpstatuses.com/" className={classes.text}>
        {text}
      </a>
    </div>
  );
}

export default PolicyItem;
