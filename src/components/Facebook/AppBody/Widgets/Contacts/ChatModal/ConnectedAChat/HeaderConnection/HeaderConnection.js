import _ from "./HeaderConnection.module.css";
import { XemThêmIcon } from "../../../../../../../../icons/iconsFacebook";
import {
  VideoFromMessengerIcon,
  XFromMessengerIcon,
  GạchNgangFromMessengerIcon,
  PhoneFromMessengerIcon,
} from "../../../../../../../../icons/iconsFacebook";
import db, { ref, update } from "../../../../../../../../firebase";
import avatarRegister from "../../../../../../../../img/avatarRegister.jpg";
import avatarIconLarge from "../../../../../../../../img/avatarIconLarge.png";

function HeaderConnection({
  isFocus,
  userFacebook,
  userChatTo,
  setCreateChats,
}) {
  //destructoring
  const { _avatar } = userChatTo;
  const avatarUserToChat =
    _avatar === avatarRegister ? avatarIconLarge : _avatar;

  //Return JSX
  return (
    <div className={_.chat_aConnection_header}>
      <div className={_.chat_aConnection_header_info}>
        <img
          src={avatarUserToChat}
          alt="avatar"
          className={_.chat_aConnection_header_info_avatar}
        />
        <div
          className={_.chat_aConnection_header_info_dotActive}
          style={
            userChatTo.status
              ? { backgroundColor: "#31a24c" }
              : { backgroundColor: "#df0707" }
          }
        ></div>
        <div className={_.chat_aConnection_header_info_name}>
          {userChatTo.name}
        </div>
        <XemThêmIcon />
      </div>

      {/* optional */}
      <div className={_.chat_aConnection_header_optional}>
        <VideoFromMessengerIcon
          className={_.chat_aConnection_header_optional_item}
          styleSvg={isFocus ? { fill: "#0084ff" } : {}}
        />
        <PhoneFromMessengerIcon
          className={_.chat_aConnection_header_optional_item}
          styleSvg={isFocus ? { fill: "#0084ff" } : {}}
        />
        <GạchNgangFromMessengerIcon
          className={_.chat_aConnection_header_optional_item}
          styleSvg={isFocus ? { stroke: "#0084ff" } : {}}
        />
        <XFromMessengerIcon
          className={_.chat_aConnection_header_optional_item}
          styleSvg={isFocus ? { stroke: "#0084ff" } : {}}
          onClick={() => {
            //check is had a connection
            const theyId = userChatTo._id;
            const myIdPath = userFacebook.idPath;
            const myChannels = JSON.parse(userFacebook.channels);
            const changedMyStatusChannel = myChannels.map((channel) => {
              if (channel.theyId === theyId) {
                channel.status = false;
                return channel;
              } else {
                return channel;
              }
            });

            update(ref(db, `users/${myIdPath}`), {
              channels: JSON.stringify(changedMyStatusChannel),
            });

            setCreateChats((state) => {
              const theRestOfChats = state.filter((userToChat) => {
                return !(userToChat._id === userChatTo._id);
              });

              return theRestOfChats;
            });
          }}
        />
      </div>
    </div>
  );
}

export default HeaderConnection;
