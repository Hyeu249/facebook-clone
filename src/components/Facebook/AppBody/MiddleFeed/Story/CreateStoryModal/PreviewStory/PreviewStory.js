import React from "react";
import classes from "./PreviewStory.module.css";
import circleBG_1 from "../../../../../../../img/circleBG_1.jpg";

function PreviewStory({ enteredText, fontFamily, className, backgroundText }) {
  //handle long text
  if (enteredText?.length > 127)
    enteredText = `${enteredText.slice(0, 127)} ...`;

  //Return JSx
  return (
    <div className={className}>
      <div className={classes.overallFrame}>
        <div className={classes.previewText}>Preview</div>
        <div className={classes.blackFrame}>
          <div className={classes.displayBackground}>
            {/* text */}
            <div
              className={classes.textTyping}
              style={{
                fontFamily: fontFamily,
                color: enteredText ? "#fff" : "",
              }}
            >
              {enteredText || "Start typing"}
            </div>
            {/* image */}
            <img
              src={backgroundText || circleBG_1}
              alt="background"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "15px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewStory;
