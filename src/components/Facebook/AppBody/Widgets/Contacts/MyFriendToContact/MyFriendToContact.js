import { Fragment } from "react";
import _ from "./MyFriendToContact.module.css";

function MyFriendToContact({ onClick, avatar, name, status }) {
  //Return JSX
  return (
    <Fragment>
      <div className={_.friend} onClick={onClick}>
        <img src={avatar} alt="avatar" className={_.friend_avatar} />
        <div
          className={_.friend_avatar_alive}
          style={{ backgroundColor: status ? "#31a24c" : "#df0707" }}
        ></div>
        <div className={_.friend_theyName}>{name}</div>
      </div>
    </Fragment>
  );
}

export default MyFriendToContact;
