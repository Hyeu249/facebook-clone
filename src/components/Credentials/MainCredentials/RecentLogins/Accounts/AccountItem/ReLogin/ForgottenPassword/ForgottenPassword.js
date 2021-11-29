import A from "../../../../../../../UI/A/A";
import classes from "./ForgottenPassword.module.css";

const ForgottenPassword = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <A
        value="Forgotten password?"
        className={classes.forgottenPassText}
        classMain={classes.forgottenPassText_main}
      />
    </div>
  );
};

export default ForgottenPassword;
