import React from "react";
import __ from "./LeavePageModal.module.css";
import { XIconLarge } from "../../../../../../../icons/iconsFacebook";

function LeavePageModal({ setIsLeavePage }) {
  //Return JSX
  return (
    <div className={__.leavePageOverlay}>
      <div className={__.leavePage}>
        {/* top */}
        <div className={__.leavePage_top}>
          <div>Leave Page?</div>
          <XIconLarge
            style={{ padding: "8px", margin: "0px" }}
            onClick={() => setIsLeavePage(false)}
          />
        </div>
        {/* line */}
        <div style={{ borderBottom: "1px solid #e6e6e6" }}></div>
        {/* bottom */}
        <div className={__.leavePage_bottom}>
          {/* text */}
          <div className={__.leavePage_bottom_text}>
            You didn't share your post yet. Are you sure you want to leave
            without posting?
          </div>
          {/* button left */}
          <div className={__.leavePage_bottom_button}>
            <div
              className={__.leavePage_bottom_button_left}
              onClick={() => setIsLeavePage(false)}
            >
              Keep Editing
            </div>
            <div className={__.leavePage_bottom_button_right}>Leave</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeavePageModal;
