import classes from "./TextLoading.module.css";

const TextLoading = () => {
  return (
    <div style={{ height: "20px" }}>
      <span className={classes.dot}>.</span>
      <span className={classes.dot}>.</span>
      <span className={classes.dot}>.</span>
    </div>
  );
};

export default TextLoading;
