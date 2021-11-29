import { useRef } from "react";
import classes from "./IconsMiddle.module.css";

const IconMiddle = ({
  id,
  type,
  Icon,
  IconOutline,
  onSetChecked,
  defaultChecked,
}) => {
  //ref
  const ref = useRef();

  //Return JXS
  return (
    <div style={{ position: "relative" }}>
      <input
        name="iconMiddle"
        type={type}
        id={id}
        ref={ref}
        onClick={() => onSetChecked((state) => !state)}
        style={{ display: "none" }}
        defaultChecked={defaultChecked}
      />
      {ref.current?.checked && (
        <label htmlFor={id} className={classes.label_of_icon}>
          <Icon fontSize="35px" />
        </label>
      )}
      {!ref.current?.checked && (
        <label htmlFor={id} className={classes.label_of_icon}>
          <IconOutline fontSize="35px" />
        </label>
      )}
      <div
        style={{
          opacity: "0",
          borderBottom: "4px solid #fff",
          borderRadius: "3px 3px 0px 0px",
        }}
      ></div>
      <span></span>
    </div>
  );
};

export default IconMiddle;
