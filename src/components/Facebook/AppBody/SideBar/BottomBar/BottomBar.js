import React from "react";
import BottomBarItem from "./BottomBarItem/BottomBarItem";
import classes from "./BottomBar.module.css";
import FirstText from "./FirstText/FirstText";
import Policy from "./Policy/Policy";
import {
  jsGroup_Img,
  groupBlackColor_Img,
  frontEndGroup_Img,
  nodejsGroup_Img,
} from "../../../../../img/img";

function BottomBar() {
  return (
    <div className={classes.bottomBar}>
      <FirstText />
      <BottomBarItem img={jsGroup_Img()} nameGroup="Javascript Developers" />
      <BottomBarItem
        img={groupBlackColor_Img()}
        nameGroup="Học lập trình wed (F8 Fullstack.edu.vn)"
      />
      <BottomBarItem
        img={frontEndGroup_Img()}
        nameGroup="Cộng đồng Front-end(HTML/CSS/JS) Việt Nam"
      />
      <BottomBarItem img={nodejsGroup_Img()} nameGroup="Node.js Việt Name" />
      <Policy />
    </div>
  );
}

export default BottomBar;
