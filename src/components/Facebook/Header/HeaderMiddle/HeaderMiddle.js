import { useState, useEffect } from "react";
import {
  HomeIcon,
  HomeIconOutline,
  FriendsIcon,
  FriendsIconOutline,
  WatchIcon,
  WatchIconOutline,
  GroupIcon,
  GroupIconOutline,
  GameIcon,
  GameIconOutline,
  AnotherIcon,
} from "../../../../icons/iconsFacebook";
import IconMiddle from "./IconsMiddle/IconsMiddle";
import ids from "./ids.module.css";

const HeaderMiddle = ({ classes }) => {
  //destructuring
  const {
    header__middle,
    header__option,
    "header__option--flexGrow": option__flexGrow,
    grid_row_col,
  } = classes;

  //state
  const [checked, setChecked] = useState(false);

  //effect
  useEffect(() => {
    //set checked useRef value
    setChecked(true);
  }, [setChecked]);

  //Return JSX
  return (
    <div className={`${grid_row_col} ${header__middle}`}>
      <div className={`${header__option} ${option__flexGrow} mobile__hidden`}>
        <IconMiddle
          id={ids.homeIcon}
          type="radio"
          Icon={HomeIcon}
          IconOutline={HomeIconOutline}
          onSetChecked={setChecked}
          defaultChecked={true}
          isChecked={checked}
        />
      </div>

      <div className={`${header__option} ${option__flexGrow} mobile__hidden`}>
        <IconMiddle
          id={ids.friendsIcon}
          type="radio"
          Icon={FriendsIcon}
          IconOutline={FriendsIconOutline}
          onSetChecked={setChecked}
        />
      </div>

      <div className={`${header__option} ${option__flexGrow} mobile__hidden`}>
        <IconMiddle
          id={ids.watchIcon}
          type="radio"
          Icon={WatchIcon}
          IconOutline={WatchIconOutline}
          onSetChecked={setChecked}
        />
      </div>

      <div className={`${header__option} ${option__flexGrow} mobile__hidden`}>
        <IconMiddle
          id={ids.groupIcon}
          type="radio"
          Icon={GroupIcon}
          IconOutline={GroupIconOutline}
          onSetChecked={setChecked}
        />
      </div>

      <div
        className={`${header__option} ${option__flexGrow} mobile__hidden tablet__low__hidden`}
      >
        <IconMiddle
          id={ids.gameIcon}
          type="radio"
          Icon={GameIcon}
          IconOutline={GameIconOutline}
          onSetChecked={setChecked}
        />
      </div>

      <div
        className={`${header__option} ${option__flexGrow} pc__hidden__from__tablet__low`}
      >
        <IconMiddle
          id={ids.AnotherIcon}
          type="checkbox"
          Icon={AnotherIcon}
          IconOutline={AnotherIcon}
          onSetChecked={setChecked}
        />
      </div>
    </div>
  );
};

export default HeaderMiddle;
