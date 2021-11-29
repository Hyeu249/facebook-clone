import { Fragment } from "react";
import classes from "./ForgottenPassword.module.css";

const ForgottenPassword = () => {
  return (
    <Fragment>
      <a
        href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
        className={classes.main}
      >
        Forgotten password?
      </a>
      <div className={classes.line}></div>
    </Fragment>
  );
};

export default ForgottenPassword;
