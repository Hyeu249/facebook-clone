import _ from "./Messenger.module.css";

function Messenger({ isMy, info, message }) {
  if (isMy === true) {
    return (
      <div className={_.chat_aConnection_body_myMessenger}>
        <div className={_.chat_aConnection_body_myMessenger_theMessenger}>
          {message}
        </div>
      </div>
    );
  } else if (isMy === false) {
    return (
      <div className={_.chat_aConnection_body_friendMessenger}>
        <img
          src={info._avatar}
          alt="avatar"
          className={_.chat_aConnection_body_friendMessenger_avatar}
        />
        <div className={_.chat_aConnection_body_friendMessenger_theMessenger}>
          {message}
        </div>
      </div>
    );
  }
}

export default Messenger;
