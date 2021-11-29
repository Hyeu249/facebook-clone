import React, { Fragment } from "react";
import _ from "./PostImage.module.css";
import {
  XIconLarge,
  AddMoreImgIcon,
} from "../../../../../../../../icons/iconsFacebook";

function PostImage({
  onChange,
  postedImageFile,
  setIsPostImage,
  setPostedImageFile,
}) {
  return (
    <Fragment>
      <input
        id="postFileCreaAPost"
        type="file"
        accept="image/jpeg, image/png"
        onChange={onChange}
        style={{
          position: "absolute",
          bottom: "25px",
          left: "18px",
          display: "none",
        }}
      />
      <label className={_.post_a_file}>
        <XIconLarge
          className={_.post_a_file_child_cancelButton}
          styleX={{ filter: "none" }}
          onClick={() => {
            setPostedImageFile(false);
            setIsPostImage((state) => !state);
          }}
        />

        {/* post file */}
        {postedImageFile && (
          <label htmlFor="postFileCreaAPost" className={_.post_a_file_child}>
            <img
              src={postedImageFile.url}
              alt={postedImageFile.nameFile}
              className={_.post_a_file_child_file}
            />
          </label>
        )}

        {!postedImageFile && (
          <label htmlFor="postFileCreaAPost" className={_.post_a_file_child}>
            <label
              htmlFor="postFileCreaAPost"
              className={_.post_a_file_child_imageText}
            >
              <AddMoreImgIcon className={_.post_a_file_child_imageText_image} />
              <div style={{ fontSize: "1.0625rem", fontWeight: "500" }}>
                Thêm ảnh/video
              </div>
              <div
                style={{
                  fontSize: ".75rem",
                  color: "#65676b",
                  fontWeight: "400",
                }}
              >
                hoặc kéo và thả
              </div>
            </label>
          </label>
        )}
      </label>
    </Fragment>
  );
}

export default PostImage;
