import React from "react";

function FellingActivity({ Icon, className }) {
  return (
    <div className={className}>
      <Icon style={{ marginRight: "10px" }} />
      <div>Felling/activity</div>
    </div>
  );
}

export default FellingActivity;
