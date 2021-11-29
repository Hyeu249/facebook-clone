import React from "react";
import OptionalIcon from "./OptionalIcon/OptionalIcon";
import {
  PhotoPostIcon,
  TagPeopleIcon,
  FellingPostIcon,
  CheckInIcon,
  ThreeDotIcon,
} from "../../../../../../../icons/iconsFacebook";
import __ from "./OptionalPost.module.css";

function OptionalPost({ isPostImage, setIsPostImage, className, background }) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,
      }}
    >
      <OptionalIcon
        id={__.addPhoto}
        Icon={PhotoPostIcon}
        className={background || __.optionalIcon}
        onClick={() => {
          if (background) return;
          setIsPostImage((state) => !state);
        }}
        isPostImage={isPostImage}
        background={background}
      />

      <OptionalIcon Icon={TagPeopleIcon} className={__.optionalIcon} />

      <OptionalIcon Icon={FellingPostIcon} className={__.optionalIcon} />

      <OptionalIcon Icon={CheckInIcon} className={__.optionalIcon} />

      <OptionalIcon Icon={ThreeDotIcon} className={__.optionalIcon} />
    </div>
  );
}

export default OptionalPost;
