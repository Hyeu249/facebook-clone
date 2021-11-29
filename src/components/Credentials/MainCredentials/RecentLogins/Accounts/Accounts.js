import AccountItem from "./AccountItem/AccountItem";
import avatar from "../img/Account/noneAvatar.jpg";
import classes from "./Account.module.css";
import { useSelector } from "react-redux";

const Accounts = () => {
  //use redux
  const recentUsers = useSelector((state) => state.recentUsers);

  //Return JXS
  return (
    <div className={classes.flexItems}>
      {recentUsers.map(({ _id, name, _avatar, email }) => {
        return (
          <AccountItem key={_id} email={email} name={name} _avatar={_avatar} />
        );
      })}
      <AccountItem
        email=""
        name="Add Account"
        _avatar={avatar}
        style={{ color: "#1877f2" }}
        delete="none"
      />
    </div>
  );
};

export default Accounts;
