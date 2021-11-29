import { Fragment, useEffect, useMemo, useState } from "react";
import reactDom from "react-dom";
import _ from "./Contacts.module.css";
import MyFriendToContact from "./MyFriendToContact/MyFriendToContact";
import IconContacts from "./IconContacts/IconContacts";
import ChatModal from "./ChatModal/ChatModal";
import avatarRegister from "../../../../../img/avatarRegister.jpg";
import avatarIconLarge from "../../../../../img/avatarIconLarge.png";

function Contacts({ userFacebook, theRestUsers }) {
  //state
  const [createChats, setCreateChats] = useState([]);

  //useMemo
  const channels = useMemo(
    () => JSON.parse(userFacebook.channels),
    [userFacebook.channels]
  );

  //useEffect
  useEffect(() => {
    const isStatusTrue = channels.filter((channel) => {
      return channel.status === true;
    });
    const usersHadStatusTrue = theRestUsers?.filter((user) => {
      const isWannaChat = isStatusTrue.filter((channel) => {
        return channel.theyId === user._id;
      });
      if (isWannaChat.length > 0) return true;
      return false;
    });
    if (!(usersHadStatusTrue?.length > 0)) return;
    setCreateChats((users) => {
      const oldChats = users.filter((user) => {
        const isWaiting = usersHadStatusTrue.filter((waitinger) => {
          return user._id === waitinger._id;
        });
        if (isWaiting.length > 0) return false;
        return true;
      });
      return [...oldChats, ...usersHadStatusTrue];
    });
    //end
  }, [channels, theRestUsers]);

  //Return JSX
  return (
    <Fragment>
      <div className={_.contacts}>
        <div className={_.contacts_title}>
          <div className={_.contacts_title_text}>Contacts</div>
          <IconContacts />
        </div>

        {theRestUsers?.map((data) => {
          const avatar =
            data._avatar === avatarRegister ? avatarIconLarge : data._avatar;

          return (
            <MyFriendToContact
              key={data._id}
              avatar={avatar}
              name={data.name}
              status={data.status}
              onClick={() => {
                setCreateChats((state) => {
                  const chats = state.filter(({ _id }) => _id === data._id);
                  return chats.length > 0 ? state : [...state, data];
                });
              }}
            />
          );
        })}
      </div>
      {/* modal chat */}
      {createChats.length > 0 &&
        reactDom.createPortal(
          <ChatModal
            setCreateChats={setCreateChats}
            userFacebook={userFacebook}
            createChats={createChats}
          />,
          document.getElementById("modal-root")
        )}
    </Fragment>
  );
}

export default Contacts;
