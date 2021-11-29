import React from "react";
import __ from "./ChangeAvatar.module.css";
import { XIconLarge } from "../../../../../icons/iconsFacebook";
import avatarRegister from "../../../../../img/avatarRegister.jpg";
import db, { ref, update } from "../../../../../firebase";
import useHttp from "../../../../../hooks/use-http/use-http";

function ChangeAvatar({ setChangeAvatar }) {
  //hook
  const { sendRequest } = useHttp();

  //localStorage
  const userFacebook = JSON.parse(localStorage.getItem("userFacebook"));
  //functional
  const isCreatedAvatar = () => {
    if (userFacebook._avatar === avatarRegister) {
      return {
        messenger:
          "You didn't create your avatar yet. Your avatar is default, do you want to create one?",
        cancel: "Keep that",
        accept: "Create one",
      };
    } else {
      return {
        messenger: "You had one, do you want to make another one?",
        cancel: "No",
        accept: "Yes",
      };
    }
  };

  //Return JSX
  return (
    <div className={__.leavePageOverlay}>
      <div className={__.leavePage}>
        {/* top */}
        <div className={__.leavePage_top}>
          <div>Change your avatar?</div>
          <XIconLarge
            style={{ padding: "8px", margin: "0px" }}
            onClick={() => setChangeAvatar(false)}
          />
        </div>
        {/* line */}
        <div style={{ borderBottom: "1px solid #e6e6e6" }}></div>
        {/* bottom */}
        <div className={__.leavePage_bottom}>
          {/* text */}
          <div className={__.leavePage_bottom_text}>
            {isCreatedAvatar().messenger}
          </div>
          {/* button left */}
          <div className={__.leavePage_bottom_button}>
            <div
              className={__.leavePage_bottom_button_left}
              onClick={() => setChangeAvatar(false)}
            >
              {isCreatedAvatar().cancel}
            </div>

            <input
              type="file"
              id="changeAvatarUserHeader"
              accept="image/jpeg, image/png"
              style={{ display: "none" }}
              onChange={(e) => {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = async (readerEvent) => {
                  try {
                    //firebase
                    update(ref(db, `users/${userFacebook.idPath}`), {
                      _avatar: readerEvent.target.result,
                    });
                    userFacebook._avatar = readerEvent.target.result;

                    await sendRequest(userFacebook);
                    setChangeAvatar(false);
                  } catch (e) {
                    alert(e);
                  }
                };
              }}
            />
            <label
              htmlFor="changeAvatarUserHeader"
              className={__.leavePage_bottom_button_right}
            >
              {isCreatedAvatar().accept}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeAvatar;
