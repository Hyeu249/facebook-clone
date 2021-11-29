import useReLogin from "./hook/useRelogin";
import Card from "../../../../../../UI/Card/Card";
import Input from "../../../../../../UI/Input/Input";
import RememberPass from "./RememberPass/RememberPass";
import Button from "../../../../../../UI/Button/Button";
import X from "./X/X";
import UserName from "./UserName/UserName";
import classes from "./ReLogin.module.css";
import ForgottenPassword from "./ForgottenPassword/ForgottenPassword";
import TextLogin from "./TextLogin/TextLogin";

const ReLogin = (props) => {
  //hook local
  const {
    _avatar,
    name,
    ref,
    ref_email,
    enteredEmail,
    enteredPass,
    isRequestLogin,
    setEnteredEmail,
    setEnteredPass,
    callBack,
  } = useReLogin(props);
  const { sendRequestHandle } = callBack();

  // undisplay add account
  const addAccount = name === "Add Account";

  //Return JXS
  return (
    <div className={classes.background}>
      <Card className={classes.main}>
        <form onSubmit={sendRequestHandle}>
          <X onClick={() => props.setIsLogin(false)} />
          {!addAccount && (
            <img alt="" className={classes.avatar} src={_avatar} />
          )}
          {!addAccount && <UserName name={name} />}
          {addAccount && <TextLogin />}
          {addAccount && (
            <Input
              id="reLoginEmail"
              type="email"
              valueLabel={enteredEmail ? "" : "Email address or phone number"}
              className={classes.emailInput}
              ref={ref_email}
              onChange={() => setEnteredEmail(ref_email.current.value)}
            />
          )}
          <Input
            id="reLoginPassword"
            type="password"
            valueLabel={enteredPass ? "" : "Password"}
            className={classes.passwordInput}
            ref={ref}
            onChange={() => setEnteredPass(ref.current.value)}
          />
          <RememberPass />
          <Button
            value="Log In"
            className={classes.logInButton}
            classText={classes.logInButtonText}
            waiting={isRequestLogin}
          />
          <ForgottenPassword />
        </form>
      </Card>
    </div>
  );
};

export default ReLogin;
