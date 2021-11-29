import React, { useState, useRef, useEffect } from "react";
import __ from "./CreateContent.module.css";
import worldBlack from "../../../../../../../img/worldBlack.png";
import { AccountIcon } from "../../../../../../../icons/iconsFacebook";
import SelectionBackground from "./SelectionBackground/SelectionBackground";
import PostImage from "./PostImage/PostImage";

function CreateContent({
  avatar,
  name,
  background,
  setBackground,
  enteredMessenger,
  setEnterdMessenger,
  isPostImage,
  postedImageFile,
  setIsPostImage,
  setPostedImageFile,
}) {
  //state
  const [choseABackground, setChoseABackground] = useState(false);
  const [focusTextEffect, setFocusTextEffect] = useState();

  //ref
  const ref = useRef();

  //variable
  const firstName = name.split(" ")[1];

  //useEffect
  useEffect(() => {
    if (background) ref.current?.focus();
  }, [background]);

  //Return JSX
  return (
    <div className={__.createAPost_content}>
      {/* profile */}
      <div className={__.createAPost_content_profile}>
        <img
          src={avatar}
          alt="avatar"
          className={__.createAPost_content_profile_avatar}
        />
        <div className={__.createAPost_content_profile_setting}>
          <div className={__.createAPost_content_profile_setting_text}>
            {name}
          </div>
          <div className={__.createAPost_content_profile_setting_button}>
            <img src={worldBlack} alt="wolrd" />
            <div style={{ fontSize: ".8125rem", fontWeight: "600" }}>
              Public
            </div>
            <AccountIcon style={{ width: "18px" }} />
          </div>
        </div>
      </div>

      {/* input */}
      {!background && (
        <textarea
          onChange={(e) => setEnterdMessenger(e.target.value)}
          type="text"
          className={__.createAPost_content_textarea}
          placeholder={`${
            background ? "" : `What's on your mind, ${name.split(" ")[1]}`
          }`}
          style={
            isPostImage
              ? {
                  padding: "0px 18px 0px 18px",
                  fontSize: ".9375rem",
                  height: "50px",
                }
              : {}
          }
        ></textarea>
      )}

      {background && (
        <div
          className={__.createAPost_content_messenHadBackground}
          style={{ backgroundImage: `url(${background})` }}
          onClick={() => {
            setFocusTextEffect(true);
            ref.current.focus();
          }}
        >
          <label className={__.font_Size_height_weight}>
            {enteredMessenger || focusTextEffect || (
              <label style={{ color: "#ffffffa2" }}>
                What's on your mind, {firstName}
              </label>
            )}
            <label className={__.blinking}></label>
          </label>
          <input
            ref={ref}
            style={{
              position: "absolute",
              bottom: "0",
              color: "transparent",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              pointerEvents: "none",
            }}
            type="text"
            onChange={(e) => setEnterdMessenger(e.target.value)}
          />
        </div>
      )}
      {/* background */}
      {choseABackground && !isPostImage && (
        <SelectionBackground
          setChoseABackground={setChoseABackground}
          setBackground={setBackground}
          background={background}
        />
      )}
      {/* active optional background */}
      {!choseABackground && !isPostImage && (
        <div
          className={__.createAPost_content_background}
          onClick={() => setChoseABackground(true)}
        ></div>
      )}

      {/* upload file */}
      {isPostImage && (
        <PostImage
          setPostedImageFile={setPostedImageFile}
          postedImageFile={postedImageFile}
          setIsPostImage={setIsPostImage}
          onChange={(e) => {
            if (e.target.files[0]) {
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.onload = (readerEvent) => {
                setPostedImageFile({
                  url: readerEvent.target.result,
                  nameFile: e.target.files[0].name,
                });
              };
            }
          }}
        />
      )}
    </div>
  );
}

export default CreateContent;
