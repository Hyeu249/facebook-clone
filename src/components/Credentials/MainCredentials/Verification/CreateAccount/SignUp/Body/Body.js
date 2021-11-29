import Name from "./Name/Name";
import DateBirth from "./DateBirth/DateBirth";
import Gender from "./Gender/Gender";
import TermsPolicy from "./TermsPolicy/TermsPolicy";
import Button from "../../../../../../UI/Button/Button";
import classes from "./Body.module.css";
import EmailPassword from "./EmailPassword/EmailPassword";
import useBodyLocal from "./hook/useBodyLocal";
import React, { useEffect } from "react";

const Body = ({ setIsSignUp }) => {
  //use custom hook local
  const { _ref, isrequestSignUp, callBack } = useBodyLocal(setIsSignUp);
  const { sendRegisterHandle } = callBack();

  // console.log("validator: ", isrequestSignUp);
  // //useeffect
  useEffect(() => {
    _ref.ref_firstName?.current?.focus();
  }, [_ref.ref_firstName]);

  //Return JSX
  return (
    <div className={classes.main}>
      <form onSubmit={sendRegisterHandle}>
        <Name ref={_ref} />
        <EmailPassword _ref={_ref} />
        <DateBirth _ref={_ref} />
        <Gender _ref={_ref} />
        <TermsPolicy />
        <Button
          value="Sign In"
          className={classes.main_sendRequest}
          classText={classes.main_textButton}
          waiting={isrequestSignUp}
        />
      </form>
    </div>
  );
};

export default React.memo(Body);
