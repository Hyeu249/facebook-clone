import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import __ from "./WhatAreYouThinking.module.css";
import avatarRegister from "../../../../../img/avatarRegister.jpg";
import { avatarIconLarge_Img } from "../../../../../img/img";
import {
  LiveVideoIcon,
  PhotoPostIcon,
  FellingPostIcon,
} from "../../../../../icons/iconsFacebook";
import LiveVideo from "./LiveVideo/LiveVideo";
import PhotoVideo from "./PhotoVideo/PhotoVideo";
import FellingActivity from "./FellingActivity/FellingActivity";
import CreateAPost from "./CreateAPost/CreateAPost";

function WhatAreYouThinking({ aPost, userFacebook }) {
  //state
  const [isCreateAPost, setIsCreateAPost] = useState(false);

  //conditional
  const avatar =
    userFacebook._avatar === avatarRegister
      ? avatarIconLarge_Img()
      : userFacebook._avatar;

  //Return JSX
  return (
    <Fragment>
      <div className={__.createAPost}>
        {/* top */}
        <div className={__.createAPost_top}>
          {/*  top avatar */}
          <img
            src={avatar}
            className={__.createAPost_top_avatar}
            alt="avatar"
          />
          {/* top input */}
          <div
            className={__.createAPost_top_input}
            onClick={() => setIsCreateAPost(true)}
          >
            What's on your mind, {userFacebook.name.split(" ")[1]}
          </div>
        </div>
        {/* bottom */}
        <div className={__.createAPost_bottom}>
          <LiveVideo
            Icon={LiveVideoIcon}
            className={__.createAPost_bottom_option}
          />

          <PhotoVideo
            Icon={PhotoPostIcon}
            className={__.createAPost_bottom_option}
          />

          <FellingActivity
            Icon={FellingPostIcon}
            className={__.createAPost_bottom_option}
          />
        </div>
      </div>
      {/* modal create a post */}
      {isCreateAPost &&
        ReactDom.createPortal(
          <CreateAPost
            aPost={aPost}
            id={userFacebook.name + userFacebook._id}
            avatar={avatar}
            name={userFacebook.name}
            setIsCreateAPost={setIsCreateAPost}
          />,
          document.getElementById("modal-root")
        )}
    </Fragment>
  );
}

export default React.memo(WhatAreYouThinking);
