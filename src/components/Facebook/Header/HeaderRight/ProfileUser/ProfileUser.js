import avatarRegister from "../../../../../img/avatarRegister.jpg";
import avatarIcon from "../../../../../img/avatarIcon.png";
import classes from "./ProfileUser.module.css";

const ProfileUser = ({ userFacebook }) => {
  //destructoring
  const avatarUser =
    userFacebook?._avatar === avatarRegister
      ? avatarIcon
      : userFacebook?._avatar;
  const userName = userFacebook?.name?.split(" ")[1];

  //Return JSX
  return (
    <div className={`flex ${classes.profileUser}`}>
      <img
        src={avatarUser}
        alt="avatar"
        style={{ width: "28px", height: "28px", borderRadius: "50%" }}
      />
      <div
        className="nameUser"
        style={{ fontSize: ".9375rem", fontWeight: 600, marginLeft: "5px" }}
      >
        {userName}
      </div>
    </div>
  );
};

export default ProfileUser;
