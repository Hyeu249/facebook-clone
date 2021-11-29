import React from "react";
import classes from "./BottomBarItem.module.css";

function BottomBarItem({ img, nameGroup }) {
  return (
    <div className={classes.item}>
      <img
        src={img}
        style={{ width: "35px", borderRadius: "5px", marginRight: "12px" }}
        alt="auto"
      />
      <div className={classes.nameGroup}>{nameGroup}</div>
    </div>
  );
}

export default BottomBarItem;
