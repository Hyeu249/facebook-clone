import React, { useState, useEffect, useRef } from "react";
import _ from "./BodyConnection.module.css";
import Messenger from "./Messenger/Messenger";
import db, { onValue, ref } from "../../../../../../../../firebase";
import ScrollableFeed from "react-scrollable-feed";

function BodyConnection({ userFacebook, userChatTo }) {
  // //destructoring
  const { _id: theyId } = userChatTo;
  const { channels } = userFacebook;
  //state
  const [messages, setMessages] = useState([]);
  //ref
  const refUnMount = useRef(false);

  //useEffect
  useEffect(() => {
    refUnMount.current = true;
    const ourChannel = JSON.parse(channels).filter(
      (channel) => channel.theyId === theyId
    );
    if (!(ourChannel.length > 0)) return;
    onValue(ref(db, `messages/${ourChannel[0].channel}`), (snapshot) => {
      refUnMount.current &&
        snapshot.val() &&
        setMessages(Object.values(snapshot.val() || ""));
    });
    //end
    return () => (refUnMount.current = false);
  }, [channels, theyId]);

  //Return JSX
  return (
    <div className={_.chat_aConnection_body}>
      <div style={{ flex: "1" }}></div>
      <ScrollableFeed forceScroll={true}>
        {messages.map((data) => {
          return (
            <Messenger
              key={data.key}
              isMy={userFacebook._id === data.info._id}
              info={data.info}
              message={data.message}
            />
          );
        })}
      </ScrollableFeed>
    </div>
  );
}

export default BodyConnection;
