import React from "react";
import NameInput from "./NameInput/NameInput";
import classes from "./Name.module.css";

const Name = (props, ref) => {
  //ref
  // const { ref_firstName, ref_surName } = props._ref;
  // const { ref_1: ref_firstName, ref_2: ref_surName } = props._ref;

  //name input data
  const nameInputData = [
    {
      id: "firstNameRegister",
      valueLabel: "First name",
      ref: ref.ref_firstName,
    },
    {
      id: "surNameRegister",
      valueLabel: "Surname",
      ref: ref.ref_surName,
    },
  ];

  //Return JXS
  return (
    <div className={classes.input_top_flex}>
      {nameInputData.map((prop) => (
        <NameInput
          key={prop.id}
          id={prop.id}
          valueLabel={prop.valueLabel}
          ref={prop.ref}
          className={`${classes.input_top_child}`}
          classLabel={classes.input_top_child_label}
          classMain={classes.input_top_child_main}
          classImg={classes.input_top_child_img}
        />
      ))}
    </div>
  );
};

export default React.forwardRef(Name);
