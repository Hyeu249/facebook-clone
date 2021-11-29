import React, { useState } from "react";
import PartOne from "./PartOne/PartOne";
import PartTwo from "./PartTwo/PartTwo";
import PartThree from "./PartThree/PartThree";
import PreviewStory from "./PreviewStory/PreviewStory";
import classes from "./CreateStoryModal.module.css";
import {
  CreateATextStory,
  CreateAPhotoStory,
} from "../../../../../../icons/iconsFacebook";
import PartFour from "./PartFour/PartFour";
import { circleBG_1_Img } from "../../../../../../img/img";

function CreateStoryModal({ setIsCreatedStory, userStory, userFacebook }) {
  //state
  const [settingStory, setSettingStory] = useState();
  const [enteredText, setEnteredText] = useState();
  const [fontFamily, setFontFamily] = useState();
  const [backgroundText, setBackgroundText] = useState();

  //Return JSX
  return (
    <div className={classes.mainModal}>
      {/* setting panel */}
      <div className={`${classes.settingPanel}`}>
        <PartOne setIsCreatedStory={setIsCreatedStory} userStory={userStory} />
        <PartTwo userFacebook={userFacebook} />
        {settingStory && (
          <PartThree
            enteredText={enteredText}
            setEnteredText={setEnteredText}
            setFontFamily={setFontFamily}
            setBackgroundText={setBackgroundText}
          />
        )}
        {settingStory && (
          <PartFour
            setSettingStory={setSettingStory}
            onClick={() =>
              setIsCreatedStory({
                text: enteredText || "",
                fontFamily,
                background: backgroundText || circleBG_1_Img(),
              })
            }
          />
        )}
      </div>
      {/* display preview story */}
      {settingStory && (
        <PreviewStory
          className={`${classes.previewStory} mobile__hidden`}
          enteredText={enteredText}
          fontFamily={fontFamily}
          backgroundText={backgroundText}
        />
      )}
      {/* make a choise, a photo or a text */}
      {!settingStory && (
        <div className={`${classes.photoOrText} mobile__hidden`}>
          <CreateAPhotoStory className={classes.createAPhotoStory} />
          <CreateATextStory
            className={classes.createATextStory}
            setSettingStory={setSettingStory}
          />
        </div>
      )}
    </div>
  );
}

export default CreateStoryModal;
