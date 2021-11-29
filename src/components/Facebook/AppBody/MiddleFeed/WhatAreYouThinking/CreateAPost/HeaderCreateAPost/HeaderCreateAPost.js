import React from "react";
import { XIconLarge } from "../../../../../../../icons/iconsFacebook";
import __ from "./HeaderCreateAPost.module.css";

function HeaderCreateAPost({ setIsCreateAPost }) {
  return (
    <div className={__.createAPost_top}>
      <div className={__.createAPost_top_text}>Create post</div>
      <XIconLarge
        style={{ padding: "8px" }}
        onClick={() => setIsCreateAPost(false)}
      />
    </div>
  );
}

export default HeaderCreateAPost;
