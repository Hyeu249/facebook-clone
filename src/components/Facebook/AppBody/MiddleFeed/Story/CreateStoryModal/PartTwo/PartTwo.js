import React, { Fragment } from "react";
import classes from "./PartTwo.module.css";
import { PinionIcon } from "../../../../../../../icons/iconsFacebook";
import { avatarIconLarge_Img } from "../../../../../../../img/img";
import avatarRegister from "../../../../../../../img/avatarRegister.jpg";

function PartTwo({ userFacebook }) {
  const avatarUser =
    userFacebook._avatar === avatarRegister
      ? avatarIconLarge_Img()
      : userFacebook._avatar;

  //Return JSX
  return (
    <Fragment>
      <div className={classes.topLane}>
        <h1 style={{ lineHeight: "1.1667", fontSize: "24.5px" }}>Your story</h1>
        <PinionIcon className={classes.pinionIcon} />
      </div>
      <div className={classes.botLane}>
        <img
          src={avatarUser}
          alt="avatar"
          style={{
            width: "60px",
            height: "60px",
            margin: "0 16px",
            borderRadius: "60px",
            border: "1px solid #d4d4d4",
          }}
        />
        <h1 style={{ lineHeight: "1.1765", fontSize: "1.0625rem" }}>
          {userFacebook.name}
        </h1>
      </div>
    </Fragment>
  );
}

export default PartTwo;
