import Card from "../../../../../UI/Card/Card";
import Header from "./Header/Header";
import Body from "./Body/Body";
import classes from "./SignUp.module.css";
import { useState } from "react";

const SignUp = (props) => {
  //state
  const [forwardHandle, setForwardHandle] = useState();

  //Return JXS
  return (
    <div className={classes.background} id={props.id}>
      <div className={classes.cancelOverlay} onClick={forwardHandle}></div>
      <Card className={classes.main}>
        <Header setIsSignUp={props.setIsSignUp} />
        <div className={classes.line}></div>
        <Body setIsSignUp={props.setIsSignUp} onBackground={setForwardHandle} />
      </Card>
    </div>
  );
};

export default SignUp;
