import _ from "./IconContacts.module.css";
import {
  RoomVideoIcon,
  SearchContactsIcon,
  ThreeDotContactsIcon,
} from "../../../../../../icons/iconsFacebook";

function IconContacts() {
  return (
    <div className={_.contacts_title_icons}>
      <RoomVideoIcon />
      <SearchContactsIcon />
      <ThreeDotContactsIcon />
    </div>
  );
}

export default IconContacts;
