import TextLoading from "./TextLoading/TextLoading";
import classes from "./Button.module.css";

const Button = (props) => {
  //Return JXS
  return (
    <button
      disabled={props.disabled}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      <h2 className={`{${props.classText} ${props.classText}`}>
        {props.waiting ? <TextLoading /> : props.value}
      </h2>
      {props.children}
    </button>
  );
};

export default Button;
