import SetUpOne from "./SetUpOne/SetUpOne";
import SetUpTwo from "./SetUpTwo/SetUpTwo";
import { lineOne, lineTwo } from "./textArray";
import classes from "./Setting.module.css";
import { Fragment } from "react";

const Setting = () => {
  return (
    <Fragment>
      <div className={classes.lineOne}>
        {lineOne.map((text) => {
          return (
            <SetUpOne
              key={text.id}
              text={text.text}
              className={classes.classNomal}
            />
          );
        })}
      </div>

      <div className={classes.lineTwo}>
        {lineTwo.map((text) => {
          return (
            <SetUpTwo
              key={text.id}
              text={text.text}
              className={classes.classNomal}
              img={text.img}
            />
          );
        })}
      </div>
      <div className={classes.lineTwo}>
        <a href="https://httpstatuses.com/" className={classes.classNomal}>
          Help
        </a>
      </div>
      <span style={{ fontSize: "11px" }} className={classes.textFacebook}>
        Facebook © 2021
      </span>
    </Fragment>
  );
};

export default Setting;
