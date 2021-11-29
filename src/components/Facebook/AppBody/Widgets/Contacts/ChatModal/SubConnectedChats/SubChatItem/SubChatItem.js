import _ from "./SubChatItem.module.css";

function SubChatItem({ avatar = "", status, Icon, name }) {
  return (
    <div style={{ position: "relative", height: "50px", marginTop: "10px" }}>
      {avatar && (
        <img src={avatar} alt="avatar" className={_.subConnected_item} />
      )}
      {name && <div className={_.subConnected_describeMember}>{name}</div>}

      {status && (
        <div
          className={_.subConnected_status}
          style={
            status
              ? { backgroundColor: "#31a24c" }
              : { backgroundColor: "#df0707" }
          }
        ></div>
      )}

      {Icon && <Icon className={_.subConnected_item} />}
    </div>
  );
}

export default SubChatItem;
