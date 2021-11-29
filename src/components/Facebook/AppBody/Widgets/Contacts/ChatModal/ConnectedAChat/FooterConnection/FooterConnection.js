import _ from "./FooterConnection.module.css";
import {
  PlusfromMessenger,
  GifFromMessenger,
  StickerFromMessenger,
  ImageFromMessenger,
  LikeFromMessenger,
  SmileIconFromMessenger,
  EnterFromMessenger,
} from "../../../../../../../../icons/iconsFacebook";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import db, {
  ref as refFire,
  push,
  set,
  update,
} from "../../../../../../../../firebase";

function FooterConnection({
  isFocus,
  setIsFocus,
  userFacebook,
  userChatTo,
  setCreateChats,
}) {
  //state
  const [enteredMessenger, setEnteredMessenger] = useState();

  //ref
  const ref = useRef();

  const uploadMessage = () => {
    const myId = userFacebook._id;
    const theyId = userChatTo._id;
    const myIdPath = userFacebook.idPath;
    const theyIdPath = userChatTo.idPath;
    const me = userFacebook.name;
    const they = userChatTo.name;
    const ourChannelId = uuidv4().replace(/-/g, "a");
    //check is had a connection
    const myChannels = JSON.parse(userFacebook.channels);
    const theyChannels = JSON.parse(userChatTo.channels);

    const isConnected = myChannels.filter(
      (channel) => channel.theyId === theyId
    );

    const changedTheyStatusChannel = theyChannels.map((channel) => {
      if (channel.theyId === myId) {
        channel.status = true;
        return channel;
      } else {
        return channel;
      }
    });

    if (isConnected.length > 0) {
      set(push(refFire(db, `messages/${isConnected[0].channel}`)), {
        key: uuidv4().replace(/-/g, "a"),
        name: me,
        message: ref.current.value,
        info: userFacebook,
      }).then(() => {
        update(refFire(db, `users/${theyIdPath}`), {
          channels: JSON.stringify(changedTheyStatusChannel),
        });
      });
      //end If
    } else {
      set(push(refFire(db, `messages/${ourChannelId}`)), {
        key: uuidv4().replace(/-/g, "a"),
        name: me,
        message: ref.current.value,
        info: userFacebook,
      }).then(() => {
        update(refFire(db, `users/${myIdPath}`), {
          channels: JSON.stringify([
            ...myChannels,
            {
              name: they,
              theyId: theyId,
              channel: ourChannelId,
              status: false,
            },
          ]),
        });
        //update they channel
        update(refFire(db, `users/${theyIdPath}`), {
          channels: JSON.stringify([
            ...theyChannels,
            {
              name: me,
              theyId: myId,
              channel: ourChannelId,
              status: true,
            },
          ]),
        });
      });
      //end else
    }
  };

  //Return JSX
  return (
    <div className={_.footer}>
      <PlusfromMessenger
        className={`${_.footer_icon}`}
        styleSvg={isFocus ? { fill: "#0084ff" } : {}}
      />
      <ImageFromMessenger
        className={`${_.footer_icon} ${
          enteredMessenger ? "hiddenVisibility" : ""
        }`}
        styleSvg={isFocus ? { fill: "#0084ff" } : {}}
      />
      <StickerFromMessenger
        className={`${_.footer_icon} ${
          enteredMessenger ? "hiddenVisibility" : ""
        }`}
        styleSvg={isFocus ? { fill: "#0084ff" } : {}}
      />
      <GifFromMessenger
        className={`${_.footer_icon} ${
          enteredMessenger ? "hiddenVisibility" : ""
        }`}
        styleSvg={isFocus ? { fill: "#0084ff" } : {}}
      />
      {/* input */}
      <div
        className={`${_.footer_divInput}`}
        style={enteredMessenger ? { width: "290px" } : {}}
      >
        <input
          ref={ref}
          type="text"
          placeholder="Aa"
          className={`${_.footer_divInput_input}`}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            setIsFocus((state) => {
              if (state === "Enter") return true;
              return false;
            });
          }}
          onChange={(e) => setEnteredMessenger(e.target.value)}
          onKeyDown={(e) => {
            if (
              (e.code === "Enter" || e.code === "NumpadEnter") &&
              e.target.value.length > 0
            ) {
              uploadMessage();
              ref.current.value = "";
              setEnteredMessenger("");
            }
            if (e.code === "Escape") {
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

              update(refFire(db, `users/${myIdPath}`), {
                channels: JSON.stringify(changedMyStatusChannel),
              });

              setCreateChats((state) => {
                const theRestOfChats = state.filter((userToChat) => {
                  return !(userToChat._id === userChatTo._id);
                });

                return theRestOfChats;
              });
            }
          }}
        />
        {isFocus && <div className={_.footer_divInput_dotActive}></div>}
        <SmileIconFromMessenger
          className={_.footer_divInput_chooseAnEmoji}
          styleSvg={isFocus ? { fill: "#0084ff" } : {}}
        />
        {/* icon */}
        {enteredMessenger && (
          <EnterFromMessenger
            className={`${_.footer_divInput_likeIcon}`}
            styleSvg={isFocus ? { fill: "#0084ff" } : {}}
            onMouseDown={() => {
              uploadMessage();
              ref.current.value = "";
              setEnteredMessenger("");
              setIsFocus("Enter");
            }}
          />
        )}

        {!enteredMessenger && (
          <LikeFromMessenger
            className={`${_.footer_divInput_likeIcon}`}
            styleSvg={isFocus ? { fill: "#0084ff" } : {}}
          />
        )}
      </div>
    </div>
  );
}

export default FooterConnection;
