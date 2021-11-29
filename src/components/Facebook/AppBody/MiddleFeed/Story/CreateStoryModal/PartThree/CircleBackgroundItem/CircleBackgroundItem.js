import React, { Fragment } from "react";
import classes from "./CircleBackgroundItem.module.css";

function CircleBackgroundItem({
  id,
  image,
  defaultChecked,
  setBackgroundText,
}) {
  //return JSX
  return (
    <Fragment>
      <input
        type="radio"
        name="CircleBackgroundItem"
        id={id}
        style={{ position: "absolute", left: "-500px", width: "1px" }}
        defaultChecked={defaultChecked}
      />
      <label
        htmlFor={id}
        className={classes.backgroundArea_circleFrame_circle}
        onClick={() => setBackgroundText(image)}
      >
        <img
          src={image}
          alt="background"
          style={{ width: "100%", height: "100%", borderRadius: "25px" }}
        />
      </label>
    </Fragment>
  );
}

export default CircleBackgroundItem;
