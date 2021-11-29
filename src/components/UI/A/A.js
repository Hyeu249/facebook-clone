import classes from "./A.module.css";

const A = (props) => {
  return (
    <a
      href={props.href === undefined ? "https://httpstatuses.com/" : props.href}
      className={`${classes.a} ${props.className}`}
      style={props.style}
    >
      {props.value}
    </a>
  );
};

export default A;
