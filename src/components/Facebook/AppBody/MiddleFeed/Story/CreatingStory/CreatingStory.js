import React from "react";
import classes from "./CreatingStory.module.css";
import { PlusIcon } from "../../../../../../icons/iconsFacebook";

function CreatingStory({ setIsCreatedStory }) {
  return (
    <div className={classes.creatingStoryFrame}>
      <div
        className={classes.creatingStory}
        onClick={() => setIsCreatedStory(true)}
      >
        <PlusIcon className={classes.plusIcon} />
        <div>
          <div
            style={{
              lineHeight: "1.1765",
              fontWeight: "600",
              fontSize: "1.0625rem",
              color: "black",
            }}
          >
            Create Story
          </div>
          <div style={{ color: "rgb(110, 110, 110)", fontSize: ".9375rem" }}>
            Share a photo or write something.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatingStory;
