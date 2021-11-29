import Radio from "../../../../../../../../UI/Radio/Radio";
import classes from "./Fields.module.css";

const Fields = (props) => {
  //Return JXS
  return (
    <div className={classes.mainFields}>
      <Radio
        id={classes.female}
        valueLabel="Female"
        name="gender"
        ref={props._ref.ref_female}
        onClick={props.onClick.cancelCustomGenderHandle}
      />
      <Radio
        id={classes.male}
        valueLabel="Male"
        name="gender"
        classMain={classes.sizeMale}
        ref={props._ref.ref_male}
        onClick={props.onClick.cancelCustomGenderHandle}
      />
      <Radio
        id={classes.custom}
        valueLabel="Custom"
        name="gender"
        ref={props._ref.ref_custom}
        onClick={props.onClick.optionalGenderHandle}
      />
    </div>
  );
};

export default Fields;
