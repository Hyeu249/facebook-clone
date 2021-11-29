import React from "react";
import CreateStory from "./CreateStory/CreateStory";
import StoryItem from "./StoryItem/StoryItem";
import classes from "./CreatedStory.module.css";

function CreatedStory({ userStory, setIsCreatedStory, userFacebook }) {
  console.log(userStory);

  //Return JSX
  return (
    <div className={classes.createdFrame}>
      <CreateStory
        userFacebook={userFacebook}
        setIsCreatedStory={setIsCreatedStory}
      />
      <StoryItem
        userFacebook={userFacebook}
        text={userStory[userStory.length - 1]?.text}
        image={userStory[userStory.length - 1]?.background}
      />
    </div>
  );
}

export default React.memo(CreatedStory);
