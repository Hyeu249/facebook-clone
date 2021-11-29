import { Fragment } from "react";
import EyeHide from "./EyeHide/EyeHide";
import EyeShow from "./EyeShow/EyeShow";
import classes from "./Eyes.module.css";

const Eyes = (props) => {
  //Return JXS
  return (
    <Fragment>
      {!props.conditionErr && (
        <span className={classes.eyes}>
          {props.type === "password" && <EyeHide setType={props.setType} />}
          {props.type === "text" && <EyeShow setType={props.setType} />}
        </span>
      )}
    </Fragment>
  );
};

export default Eyes;
