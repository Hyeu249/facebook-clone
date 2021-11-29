import { useCallback, useState } from "react";
import validator from "validator";

const useValidation = () => {
  //State
  const [enteredInputState, setEnteredInputState] = useState();
  const [validatorInputState, setValidatorInputState] = useState();
  const [textErrState, setTextErrState] = useState();

  const callBack = useCallback(({ validation, ref, textErr }) => {
    //blur handle
    const blurHandle = (e) => {
      setValidatorInputState(validator[validation](e.target.value));
      setTextErrState(false);
    };

    //on change handle
    const onChangeHandle = (e) => {
      //back up for auto fill input(blurhandle still important for the first touched, validatorInputState alway be activated on every keystroke but that not important because we have :focus css on input to remove imgErr & border red)
      if (validator[validation](e.target.value)) setValidatorInputState(true);
      if (validator[validation](e.target.value) === false) {
        setValidatorInputState(false);
      }
      setEnteredInputState(e.target.value);
    };

    //onImg
    const onImgHandle = () => {
      ref.current.focus();
      setTextErrState(textErr);
    };

    return { blurHandle, onChangeHandle, onImgHandle };
  }, []);

  return { enteredInputState, validatorInputState, textErrState, callBack };
};

export default useValidation;
