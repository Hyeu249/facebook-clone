import React from "react";
import { XIconLarge } from "../../../../../../../../icons/iconsFacebook";
import classes from "./DisCardModal.module.css";

function DisCardModal({ setDiscardingStory, setSettingStory }) {
  return (
    // background
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
        fontWeight: 700,
        lineHeight: 1.3333,
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "950px",
        backgroundColor: "rgb(244, 244, 244,0.8)",
        zIndex: "4",
      }}
    >
      {/* frame */}
      <div
        style={{
          boxShadow: "1px 2px 5px #dadde1",
          borderRadius: "15px",
          width: "548px",
        }}
      >
        {/* delete */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 18px",
            backgroundColor: "#fff",
            fontSize: "1.25rem",
            borderRadius: "15px 15px 0 0 ",
          }}
        >
          <div>Discard story?</div>
          <XIconLarge onClick={() => setDiscardingStory(false)} />
        </div>
        {/* line */}
        <div style={{ border: "1px solid #F2F3F5" }}></div>
        {/* content */}
        <div
          style={{
            padding: "10px 18px 18px 18px",
            backgroundColor: "#fff",
            borderRadius: " 0 0 15px 15px",
          }}
        >
          {/* 1 */}
          <div
            style={{
              paddingBottom: "30px",
              fontSize: ".9375rem",
              fontWeight: "400",
            }}
          >
            Are you sure that you want to discard this story? Your story won't
            be saved.
          </div>
          {/* 2 */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div
              className={classes.continueEdit}
              onClick={() => setDiscardingStory(false)}
            >
              Continue Editing
            </div>
            <div
              className={classes.discard}
              onClick={() => setSettingStory(false)}
            >
              Discard
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisCardModal;
