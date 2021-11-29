import React from "react";

function PhotoVideo({ Icon, className }) {
  return (
    <div className={className}>
      <Icon style={{ marginRight: "10px" }} />
      <div>Photo/Video</div>
    </div>
  );
}

export default PhotoVideo;
