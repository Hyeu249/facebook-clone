import Card from "../../../UI/Card/Card";
import LogIn from "./LogIn/LogIn";
import ForgottenPassword from "./ForgottenPassword/ForgottenPassword";
import CreateAccount from "./CreateAccount/CreateAccount";
import CreateAPage from "./CreateAPage/CreateAPage";
import classes from "./Verification.module.css";

const Verification = () => {
  //Return JXS
  return (
    <div className={classes.invisibleAlign}>
      <Card className={classes.card}>
        <LogIn />
        <ForgottenPassword />
        <CreateAccount />
      </Card>
      <CreateAPage />
    </div>
  );
};

export default Verification;
