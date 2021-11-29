import { Fragment } from "react";
import { useSelector } from "react-redux";
import Accounts from "./Accounts/Accounts";
import classes from "./RecentLogins.module.css";

const RecentLogins = () => {
  //redux
  const recentUsers = useSelector((state) => state.recentUsers);

  const isUser = recentUsers.length > 0;

  //Return JXS
  return (
    <div className={classes.main} style={isUser ? {} : { marginTop: "100px" }}>
      <img
        style={isUser ? {} : { height: "106px" }}
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt="Facebook"
        className={classes.logoFb}
      />

      {isUser && (
        <Fragment>
          <div className={classes.main_textOne}>Recent logins</div>
          <div className={classes.main_textTwo}>
            Click your picture or add an account.
          </div>
          <Accounts />
        </Fragment>
      )}

      {!isUser && (
        <h2 className={classes.textNoneRecentAcc}>
          Facebook helps you connect and share with the people in your life.
        </h2>
      )}
    </div>
  );
};

export default RecentLogins;
