import classes from "./Text.module.css";

const Text = () => {
  return (
    <div className={classes.text}>
      <div>Date & birth</div>
      <input id={classes.textData} type="text" />
      <p className={classes.paragraph}>
        <strong>Providing your date of birth</strong> helps make sure that you
        get the right Facebook experience for your age. If you want to change
        who sees this, go to the About section of your Profile. For more
        details, please visit our{" "}
        <a href="https://www.facebook.com/privacy/explanation/">Data Policy.</a>
      </p>
      <label htmlFor={classes.textData} className={classes.text_instruction}>
        ?
      </label>
    </div>
  );
};

export default Text;
