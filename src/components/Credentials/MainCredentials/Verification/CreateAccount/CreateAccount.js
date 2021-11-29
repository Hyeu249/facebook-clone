import { Fragment, useState } from "react";
import ReactDom from "react-dom";
import SignUp from "./SignUp/SignUp";
import Button from "../../../../UI/Button/Button";
import classes from "./CreateAccount.module.css";

const CreateAccount = (props) => {
  //state
  const [isSignUp, setIsSignUp] = useState(false);

  //Return JXS
  return (
    <Fragment>
      {isSignUp &&
        ReactDom.createPortal(
          <SignUp id={classes.id} setIsSignUp={setIsSignUp} />,
          document.getElementById("modal-root")
        )}
      <div className={classes.main}>
        <Button
          value="Create New Account"
          className={classes.button}
          classText={classes.text}
          onClick={setIsSignUp.bind(null, true)}
        />
      </div>
    </Fragment>
  );
};

export default CreateAccount;
