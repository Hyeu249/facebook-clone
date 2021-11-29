import Language from "./Language/Language";
import Setting from "./Setting/Setting";
import classes from "./FooterCredentials.module.css";

const FooterCredentials = () => {
  return (
    <div className={classes.invisibleAlign}>
      <div className={classes.main}>
        <Language />
        <div className={classes.line}></div>
        <Setting />
      </div>
    </div>
  );
};

export default FooterCredentials;
