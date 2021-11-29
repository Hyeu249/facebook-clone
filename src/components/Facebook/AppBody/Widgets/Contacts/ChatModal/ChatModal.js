import reactDom from "react-dom";
import SubConnectedChats from "./SubConnectedChats/SubConnectedChats";
import _ from "./ChatModal.module.css";
import ConnectedAChat from "./ConnectedAChat/ConnectedAChat";
import { Fragment } from "react";

function ChatModal({ userFacebook, createChats, setCreateChats }) {
  const convertCreateChats = [];
  const length = createChats.slice(-3).length;
  const sliceCreateChats = createChats.slice(-3);
  for (let i = length - 1; i >= 0; i--) {
    convertCreateChats.push(sliceCreateChats[i]);
  }
  const subChatsUsers = [...createChats.slice(-9, -3)];
  //Return JSX
  return (
    <Fragment>
      <div className={_.chat}>
        {convertCreateChats.map((data) => (
          <ConnectedAChat
            key={data._id}
            userFacebook={userFacebook}
            userChatTo={data}
            setCreateChats={setCreateChats}
          />
        ))}
      </div>
      {reactDom.createPortal(
        <SubConnectedChats subChatsUsers={subChatsUsers} />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
}

export default ChatModal;
