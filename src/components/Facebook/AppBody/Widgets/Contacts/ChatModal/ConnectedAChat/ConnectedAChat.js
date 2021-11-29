import HeaderConnection from "./HeaderConnection/HeaderConnection";
import BodyConnection from "./BodyConnection/BodyConnection";
import FooterConnection from "./FooterConnection/FooterConnection";
import _ from "./ConnectedAChat.module.css";
import { useState } from "react";

function ConnectedAChat({ userFacebook, userChatTo, setCreateChats }) {
  // //state
  const [isFocus, setIsFocus] = useState();

  //Return JSX
  return (
    <div className={_.chat_aConnection}>
      <HeaderConnection
        isFocus={isFocus}
        userFacebook={userFacebook}
        userChatTo={userChatTo}
        setCreateChats={setCreateChats}
      />
      <BodyConnection userFacebook={userFacebook} userChatTo={userChatTo} />
      <FooterConnection
        userChatTo={userChatTo}
        userFacebook={userFacebook}
        isFocus={isFocus}
        setIsFocus={setIsFocus}
        setCreateChats={setCreateChats}
      />
    </div>
  );
}

export default ConnectedAChat;
