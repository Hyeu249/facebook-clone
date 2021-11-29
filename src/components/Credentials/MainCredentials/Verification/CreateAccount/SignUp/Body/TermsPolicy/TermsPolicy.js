import classes from "./TermsPolicy.module.css";
import A from "../../../../../../../UI/A/A";

const TermsPolicy = () => {
  return (
    <div className={classes.main}>
      <p className={classes.main_text}>
        By clicking Sign Up, you agree to our <A value=" Terms" />,{" "}
        <A value=" Data Policy " />
        and <A value=" Cookie Policy" />. You may receive SMS notifications from
        us and can opt out at any time.
      </p>
    </div>
  );
};

export default TermsPolicy;
