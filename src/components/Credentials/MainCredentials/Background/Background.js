import classes from "./Background.module.css";

const Background = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes.body}>{props.children}</div>
    </div>
  );
};

export default Background;
