import classes from "./Text.module.css";

const Text = () => {
  return (
    <div className={classes.text}>
      <div>Gender</div>
      <input id={classes.textData} type="text" />
      <p className={classes.paragraph}>
        You can change who sees your gender on your profile later. Select Custom
        to choose another gender, or if you'd rather not say.
      </p>
      <label htmlFor={classes.textData} className={classes.text_instruction}>
        ?
      </label>
    </div>
  );
};

export default Text;
