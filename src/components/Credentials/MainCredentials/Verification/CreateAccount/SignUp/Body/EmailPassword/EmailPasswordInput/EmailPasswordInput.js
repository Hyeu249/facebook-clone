import useValidation from "../../../../../../../../../hooks/input_validation/useValidation";
import Input from "../../../../../../../../UI/Input/Input";
import classes from "./EmailPasswordInput.module.css";

const EmailPasswordInput = (props) => {
  //local hook
  const { enteredInputState, validatorInputState, textErrState, callBack } =
    useValidation();
  const { blurHandle, onChangeHandle, onImgHandle } = callBack({
    validation: props.validation,
    ref: props._ref,
    textErr: props.textErr,
  });

  //Return JXS
  return (
    <div className={classes.main}>
      <Input
        id={props.id}
        valueLabel={enteredInputState ? "" : props.valueLabel}
        className={`${classes.main_input}  ${
          validatorInputState === false && "errorBorder"
        }`}
        classLabel={classes.main_input_label}
        classMain={classes.main_input_classMain}
        classImg={classes.main_input_classImg}
        classTextErr={{ text: classes.textErr, arrow: classes.arrow }}
        onChange={onChangeHandle}
        onBlur={blurHandle}
        ref={props._ref}
        conditionErr={validatorInputState === false}
        onImg={onImgHandle}
        textErr={textErrState}
        type={props.type}
      />
    </div>
  );
};

export default EmailPasswordInput;
