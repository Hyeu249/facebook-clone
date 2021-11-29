import Text from "./Text/Text";
import classes from "./DateBirth.module.css";
import Fields from "./Fields/Fields";

const DateBirth = (props) => {
  return (
    <div className={classes.DateBirth}>
      <Text />
      <Fields _ref={props._ref} />
    </div>
  );
};

export default DateBirth;
