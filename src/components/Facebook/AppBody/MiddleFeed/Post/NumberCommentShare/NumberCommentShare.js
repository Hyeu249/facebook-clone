import React from "react";
import _ from "./NumberCommentShare.module.css";

function DisplayCommentShare({ aPost, setAllowComment }) {
  const getNumberOfComments = ({ comments: json }) => {
    const comments = JSON.parse(json);
    return comments.length > 0 ? `${comments.length} comments` : "";
  };

  //Return JSx
  return (
    <div className={_.post_bottom_displayShareLike_shareComment}>
      {/* comment */}
      <div
        className={_.post_bottom_displayShareLike_shareComment_item}
        onClick={() => setAllowComment((state) => !state)}
      >
        {getNumberOfComments(aPost)}
      </div>

      {/* share */}
      <div className={_.post_bottom_displayShareLike_shareComment_item}>
        {/* 5 share */}
      </div>
    </div>
  );
}

export default DisplayCommentShare;
