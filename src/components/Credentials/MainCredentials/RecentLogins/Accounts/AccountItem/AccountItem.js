import { Fragment } from "react";
import ReactDom from "react-dom";
import useAccountItem from "./hook/useAccountItem";
import ReLogin from "./ReLogin/ReLogin";
import classes from "./AccountItem.module.css";

const AccountItem = (props) => {
  //props
  const { email, _avatar, name } = props;

  //custom hooks
  const { isLogin, setIsLogin, callBack } = useAccountItem();
  const { signInHandle, deleteRecentAccHandle } = callBack({
    email,
  });

  //Return JXS
  return (
    <Fragment>
      {isLogin &&
        ReactDom.createPortal(
          <ReLogin setIsLogin={setIsLogin} infoUserFacebook={props} />,
          document.getElementById("modal-root")
        )}
      <div className={classes.item} onClick={signInHandle}>
        {props.delete ? (
          ""
        ) : (
          <div className={classes.item_delete} onClick={deleteRecentAccHandle}>
            x
          </div>
        )}
        <img
          className={classes.item_avatar}
          src={_avatar}
          alt=""
          aria-label=""
          role="img"
          style={{ height: "160px", width: "160px" }}
        ></img>
        <div className={classes.item_nameAccount} style={props.style}>
          {name}
        </div>
      </div>
    </Fragment>
  );
};

export default AccountItem;
