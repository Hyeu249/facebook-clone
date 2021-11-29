import React, { useState } from "react";
import InfoPoster from "./InfoPoster/InfoPoster";
import DisplayLike from "./DisplayLike/DisplayLike";
import NumberCommentShare from "./NumberCommentShare/NumberCommentShare";
import _ from "./Post.module.css";
import ActiveLikeShare from "./ActiveLikeShare/ActiveLikeShare";
import { ThreeDotIcon } from "../../../../../icons/iconsFacebook";
import DisPlayComment from "./DisPlayComment/DisPlayComment";

function Post({ aPost, userFacebook }) {
  //state
  const [allowComment, setAllowComment] = useState();

  //Return JSX
  return (
    <div className={_.post}>
      <div className={_.post_top}>
        <InfoPoster aPost={aPost} userFacebook={userFacebook} />
        <ThreeDotIcon className={_.post_top_threeDot} />
      </div>
      <div className={_.post_messen}>{aPost.messenger}</div>
      {/* picture */}
      {aPost.picture && (
        <img src={aPost.picture} alt="posted file" className={_.post_picture} />
      )}
      <div className={_.post_bottom}>
        {/* display */}
        <div className={_.post_bottom_displayShareLike}>
          <DisplayLike reactions={aPost.reactions} />
          <NumberCommentShare aPost={aPost} setAllowComment={setAllowComment} />
        </div>
        {/* line */}
        <div style={{ borderBottom: "1px solid #cfcfcf" }}></div>
        {/* active */}
        <ActiveLikeShare
          idPath={aPost.idPath}
          userFacebook={userFacebook}
          setAllowComment={setAllowComment}
        />

        {allowComment && (
          <div style={{ borderBottom: "1px solid #cfcfcf" }}></div>
        )}

        {allowComment && (
          <DisPlayComment userFacebook={userFacebook} aPost={aPost} />
        )}
      </div>
    </div>
  );
}

export default Post;
