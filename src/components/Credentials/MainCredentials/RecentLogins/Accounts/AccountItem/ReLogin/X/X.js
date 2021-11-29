import classes from "./X.module.css";

const X = (props) => {
  return (
    <div className={classes.x} onClick={props.onClick}>
      X
    </div>
  );
};

export default X;
