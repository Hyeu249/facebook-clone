import React, { Fragment } from "react";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";

function SideBar({ userFacebook }) {
  return (
    <Fragment>
      <TopBar userFacebook={userFacebook} />
      <div
        style={{
          borderBottom: "1px solid rgb(219, 219, 219)",
          margin: "8px 16px 0 16px",
        }}
      ></div>
      <BottomBar />
    </Fragment>
  );
}

export default SideBar;
