import SubChatItem from "./SubChatItem/SubChatItem";
import _ from "./SubConnectedChats.module.css";
import { WriteNewMess } from "../../../../../../../icons/iconsFacebook";

function SubConnectedChats({ subChatsUsers }) {
  //destructoring
  const convertsubChatsUsers = [];
  const length = subChatsUsers.length;
  const slicesubChatsUsers = subChatsUsers;
  for (let i = length - 1; i >= 0; i--) {
    convertsubChatsUsers.push(slicesubChatsUsers[i]);
  }

  //Return JSX
  return (
    <div className={_.subConnected}>
      {convertsubChatsUsers.map(({ _id, _avatar, status, name, gender }) => (
        <SubChatItem key={_id} name={name} status={status} avatar={_avatar} />
      ))}
      <SubChatItem Icon={WriteNewMess} />
    </div>
  );
}

export default SubConnectedChats;
