import React, { useEffect } from "react";
import _ from "./InfoPoster.module.css";
import { DotIcon, WordSmallIcon } from "../../../../../../icons/iconsFacebook";
import db, { ref, update } from "../../../../../../firebase";
import avatarIconLarge from "../../../../../../img/avatarIconLarge.png";
import avatarRegister from "../../../../../../img/avatarRegister.jpg";

function InfoPoster({ aPost, userFacebook }) {
  //destructoring
  const {
    id: idPost,
    idPath,
    avatar: avatarPost,
    name: namePost,
    timestamp,
  } = aPost;
  const { _id, name: nameUser, _avatar } = userFacebook;

  //variable
  const avatarUser =
    avatarPost === avatarRegister ? avatarIconLarge : avatarPost;

  //useEffect
  useEffect(() => {
    if (idPost === nameUser + _id) {
      update(ref(db, `posts/${idPath}`), {
        avatar: _avatar,
      });
    }
  }, [idPost, _id, idPath, nameUser, _avatar]);

  //Return JSX
  return (
    <div className={_.post_top_info}>
      <img src={avatarUser} alt="avatar" className={_.post_top_info_avatar} />
      <div className={_.post_top_info_nameTime}>
        <div className={_.post_top_info_nameTime_name}>{namePost}</div>
        <div className={_.post_top_info_nameTime_time}>
          <div
            style={{ fontSize: "12px", color: "#a8a8a8", marginRight: "5px" }}
          >
            {timestamp}
          </div>{" "}
          <DotIcon
            style={{
              width: "2px",
              height: "2px",
              backgroundColor: "#a8a8a8",
              marginRight: "5px",
            }}
          />
          <WordSmallIcon style={{ fill: "#a8a8a8" }} />
        </div>
      </div>
    </div>
  );
}

export default InfoPoster;
