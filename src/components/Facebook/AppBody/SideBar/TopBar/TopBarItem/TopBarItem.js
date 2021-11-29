import React from "react";
import { DotIcon } from "../../../../../../icons/iconsFacebook";
import classes from "./TopBarItem.module.css";

function TopBarItem({ img, text, announce = {} }) {
  //announce
  let { number, type } = announce;
  if (number > 9) number = "9+";

  //return JSX
  return (
    <div className={classes.topBarItem}>
      <img
        src={img}
        alt="avatar"
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          marginRight: "12px",
          // border: "1px solid tranparent",
        }}
      />
      <div className="flex column align_start">
        <div>{text}</div>
        {announce.number && (
          <div className="flex align_end">
            <DotIcon style={{ marginRight: "5px" }} />
            <a
              href="https://httpstatuses.com/"
              style={{
                fontSize: "12px",
                color: "#1877F2",
                textDecoration: "none",
                lineHeight: "12px",
              }}
            >
              {`${number} ${type}`}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBarItem;
