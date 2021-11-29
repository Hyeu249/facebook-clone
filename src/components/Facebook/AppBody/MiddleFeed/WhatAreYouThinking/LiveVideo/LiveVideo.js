import { useState, Fragment } from "react";
import ReactDom from "react-dom";
import LeavePageModal from "./LeavePageModal/LeavePageModal";

function LiveVideo({ Icon, className }) {
  //state
  const [isLeavePage, setIsLeavePage] = useState(false);

  //Return JSX
  return (
    <Fragment>
      <div className={className} onClick={() => setIsLeavePage(true)}>
        <Icon style={{ marginRight: "10px" }} />
        <div>Live video</div>
      </div>

      {/* modal */}
      {isLeavePage &&
        ReactDom.createPortal(
          <LeavePageModal setIsLeavePage={setIsLeavePage} />,
          document.getElementById("modal-root")
        )}
    </Fragment>
  );
}

export default LiveVideo;
