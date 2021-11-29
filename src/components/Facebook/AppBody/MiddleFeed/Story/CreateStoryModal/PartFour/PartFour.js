import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import classes from "./PartFour.module.css";
import DisCardModal from "./DisCardModal/DisCardModal";

function PartFour({ setSettingStory, onClick }) {
  //state
  const [discardingStory, setDiscardingStory] = useState();

  //Return JSX
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
          fontSize: "0.9375rem",
          fontWeight: 600,
          lineHeight: 1.3333,
          boxShadow: "-4px -2px 5px #dadde1",
        }}
      >
        <div
          className={classes.discard}
          onClick={() => setDiscardingStory(true)}
        >
          Discard
        </div>
        <div className={classes.shareStory} onClick={onClick}>
          Share to Story
        </div>
      </div>
      {/* discard modal */}
      {discardingStory &&
        ReactDom.createPortal(
          <DisCardModal
            setDiscardingStory={setDiscardingStory}
            setSettingStory={setSettingStory}
          />,
          document.getElementById("modal-root")
        )}
    </Fragment>
  );
}

export default PartFour;
