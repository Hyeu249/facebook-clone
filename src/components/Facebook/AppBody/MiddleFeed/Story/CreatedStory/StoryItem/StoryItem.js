import React from "react";
import classes from "./StoryItem.module.css";

function StoryItem({ text, image, userFacebook }) {
  //handle long text
  if (text?.length > 127) text = `${text.slice(0, 127)} ...`;

  //Return JSX
  return (
    <div className={classes.storyItemFrame}>
      <div className={classes.storyItem}>
        <div className={classes.overlayStory}></div>
        <img
          src={userFacebook._avatar}
          alt=""
          className={classes.storyItem_avatar}
        />
        <div className={classes.storyItem_text}>{text}</div>
        <img src={image} alt="avatar" className={classes.storyItem_image} />
        <div className={classes.creatorName}>Tin của bạn</div>
      </div>
    </div>
  );
}

export default StoryItem;
