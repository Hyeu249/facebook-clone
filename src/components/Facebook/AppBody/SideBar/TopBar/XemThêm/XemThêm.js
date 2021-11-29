import { XemThêmIcon } from "../../../../../../icons/iconsFacebook";
import classes from "./XemThêm.module.css";

const XemThêm = () => {
  return (
    <div className={classes.main}>
      <XemThêmIcon className={classes.XemThêm} />
      <div className={classes.text}>See more</div>
    </div>
  );
};

export default XemThêm;
