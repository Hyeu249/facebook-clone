import reactDom from "react-dom";
import IconsRight from "./IconsRight/IconsRight";
import ProfileUser from "./ProfileUser/ProfileUser";
import {
  MenuIcon,
  MessengerIcon,
  AnnounceIcon,
  AccountIcon,
} from "../../../../icons/iconsFacebook";
import { Fragment, useState } from "react";
import ChangeAvatar from "./ChangeAvatar/ChangeAvatar";

const HeaderRight = (props) => {
  //selector
  const userFacebook = props.userFacebook;

  //state
  const [changeAvatar, setChangeAvatar] = useState(false);

  //destructuring
  const { grid_row_col, header__right, header__option } = props.classes;

  //Return JSX
  return (
    <Fragment>
      <div className={`${grid_row_col} ${header__right}`}>
        <div
          className={`${header__option} tablet__hidden mobile__hidden`}
          onClick={() => setChangeAvatar(true)}
        >
          <ProfileUser userFacebook={userFacebook} />
        </div>

        <div className={`${header__option}`}>
          <IconsRight Icon={MenuIcon} />
        </div>

        <div className={header__option}>
          <IconsRight Icon={MessengerIcon} />
        </div>

        <div
          className={header__option}
          // onClick={() => {
          //   localStorage.clear();
          //   window.location.reload();
          // }}
        >
          <IconsRight Icon={AnnounceIcon} />
        </div>

        <div
          className={header__option}
          onClick={() => {
            localStorage.removeItem("userFacebook");
            window.location.reload();
          }}
        >
          <IconsRight Icon={AccountIcon} />
        </div>
      </div>

      {changeAvatar &&
        reactDom.createPortal(
          <ChangeAvatar setChangeAvatar={setChangeAvatar} />,
          document.getElementById("modal-root")
        )}
    </Fragment>
  );
};

export default HeaderRight;
