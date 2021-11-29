import React from "react";
import useValidation from "../../../../../../../../../hooks/input_validation/useValidation";
import Input from "../../../../../../../../UI/Input/Input";
import classes from "./NameInput.module.css";

const NameInput = (props, ref) => {
  //local hook
  const { enteredInputState, validatorInputState, textErrState, callBack } =
    useValidation();
  const { blurHandle, onChangeHandle, onImgHandle } = callBack({
    validation: "isEmpty",
    ref: ref,
    textErr: "What's your name?",
  });

  //Return JSX
  return (
    <Input
      id={props.id}
      valueLabel={enteredInputState ? "" : props.valueLabel}
      className={`${props.className} ${validatorInputState && "errorBorder"}`}
      classLabel={props.classLabel}
      classMain={props.classMain}
      classImg={props.classImg}
      classTextErr={
        props.valueLabel === "Surname" && {
          text: classes.textErr,
          arrow: classes.arrow,
        }
      }
      onChange={onChangeHandle}
      onBlur={blurHandle}
      ref={ref}
      conditionErr={validatorInputState}
      onImg={onImgHandle}
      textErr={textErrState}
    />
  );
};

export default React.forwardRef(NameInput);
