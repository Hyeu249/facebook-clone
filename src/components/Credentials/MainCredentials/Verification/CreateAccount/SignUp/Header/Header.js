import classes from "./Header.module.css";

const Header = (props) => {
  //Return JXS
  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <h1>Sign Up</h1>
        <p style={{ lineHeight: "24px", color: "#606770", fontSize: "15px" }}>
          It's quick and easy.
        </p>
      </div>
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
        alt="X"
        width="24"
        height="24"
        style={{ cursor: "pointer" }}
        onClick={props.setIsSignUp.bind(null, false)}
      ></img>
    </div>
  );
};

export default Header;
