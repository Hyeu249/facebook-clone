import classes from "./IconsRight.module.css";

const IconsRight = ({ Icon, style }) => {
  return (
    <div className={`${classes.circleBorder}`} style={{ zIndex: "5" }}>
      <Icon
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          top: "50%",
          left: "calc(50% - (20px - 10px)",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};

export default IconsRight;
