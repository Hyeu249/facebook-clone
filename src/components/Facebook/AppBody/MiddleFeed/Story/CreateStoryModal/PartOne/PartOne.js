import React from "react";
import classes from "./PartOne.module.css";
import { XIconLarge } from "../../../../../../../icons/iconsFacebook";
import { LogoFacebook } from "../../../../../../../icons/iconsFacebook";

function PartOne({ setIsCreatedStory, userStory }) {
  return (
    <div className={classes.partOne}>
      <XIconLarge
        className={classes.xIconLarge}
        onClick={() => {
          if (userStory[0]?.background) return setIsCreatedStory({});
          setIsCreatedStory(false);
        }}
      />
      <LogoFacebook />
    </div>
  );
}

export default PartOne;
