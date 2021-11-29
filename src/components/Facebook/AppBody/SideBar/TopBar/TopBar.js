import React from "react";
import TopBarItemImg from "./TopBarItemImg/TopBarItemImg";
import TopBarItem from "./TopBarItem/TopBarItem";
import XemThêm from "./XemThêm/XemThêm";
import avatarRegister from "../../../../../img/avatarRegister.jpg";
import {
  avatarIcon_Img,
  FindFriendFb_Img,
  messenger_Img,
  GroupSideBar_Img,
  MarketPlace_Img,
  watchSideBarFb_Img,
} from "../../../../../img/img";
import classes from "./TopBar.module.css";

function TopBar({ userFacebook }) {
  //check is default avatar
  const avatarUser =
    userFacebook._avatar === avatarRegister
      ? avatarIcon_Img()
      : userFacebook._avatar;
  //Return JSX
  return (
    <div className={classes.topBar}>
      <TopBarItemImg img={avatarUser} text={userFacebook.name} />
      <TopBarItem img={FindFriendFb_Img()} text="Find Friends" />
      <TopBarItem img={messenger_Img()} text="Messenger" />
      <TopBarItem img={GroupSideBar_Img()} text="Groups" />
      <TopBarItem img={MarketPlace_Img()} text="Marketplace" />
      <TopBarItem img={watchSideBarFb_Img()} text="Watch" />
      <XemThêm />
    </div>
  );
}

export default TopBar;
