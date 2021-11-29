import React from "react";
import avatarRegister from "../../../../../../../img/avatarRegister.jpg";
import { avatarIconLarge_Img } from "../../../../../../../img/img";
import { PlusIcon } from "../../../../../../../icons/iconsFacebook";
import classes from "./CreateStory.module.css";

function CreateStory({ setIsCreatedStory, userFacebook }) {
  //Return JSX
  return (
    <div
      className={classes.createStoryFrame}
      onClick={() => setIsCreatedStory(true)}
    >
      <div className={classes.createStory}>
        <div style={{ position: "relative" }}>
          <img
            src={
              userFacebook._avatar === avatarRegister
                ? avatarIconLarge_Img()
                : userFacebook._avatar
            }
            alt="avatar"
            className={classes.image}
          />
          <PlusIcon className={classes.plusIcon} />
        </div>
        <div className={classes.nameUser}>Tạo tin</div>
      </div>
    </div>
  );
}

export default CreateStory;
