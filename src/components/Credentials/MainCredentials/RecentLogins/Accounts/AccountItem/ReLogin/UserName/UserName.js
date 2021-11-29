import classes from "./UserName.module.css";

const UserName = (props) => {
  return <div className={classes.nameUser}>{props.name}</div>;
};

export default UserName;
