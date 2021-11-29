import Text from "./Text/Text";
import Fields from "./Fields/Fields";
import classes from "./Gender.module.css";
import { Fragment, useState } from "react";
import Input from "../../../../../../../UI/Input/Input";
import Select from "../../../../../../../UI/Select/Select";

const Gender = (props) => {
  //local state
  const [enteredCustomGender, setEnteredCustomGender] = useState();
  const [isCustomGender, setIsCustomGender] = useState();

  //custom gender
  const optionalGenderHandle = () => {
    setIsCustomGender(true);
  };

  //cancel custom gender
  const cancelCustomGenderHandle = () => {
    setIsCustomGender(false);
  };

  //Return JXS
  return (
    <Fragment>
      <div className={classes.main}>
        <Text />
        <Fields
          _ref={props._ref}
          onClick={{ optionalGenderHandle, cancelCustomGenderHandle }}
        />
      </div>
      {isCustomGender && (
        <Select
          ref={props._ref.ref_selectPronoun}
          name="customGender"
          className={classes.selectCustomGender}
        >
          <option value="" hidden>
            Select your pronoun
          </option>
          <option disabled>Select your pronoun</option>
          <option value="She">She: "Wish her a happy birthday!"</option>
          <option value="He">He: "Wish him a happy birthday!"</option>
          <option value="They">They: "Wish them a happy birthday!"</option>
        </Select>
      )}
      {isCustomGender && (
        <div className={classes.textCustomGender}>
          Your pronoun is visible to everyone.
        </div>
      )}
      {isCustomGender && (
        <Input
          id="optionalGender"
          valueLabel={enteredCustomGender?.length > 0 || "Gender (optional)"}
          className={classes.customGender_input}
          classMain={classes.customGender_main}
          classLabel={classes.customGender_label}
          ref={props._ref.ref_optionalGender}
          onChange={(e) => setEnteredCustomGender(e.target.value)}
        />
      )}
    </Fragment>
  );
};

export default Gender;
