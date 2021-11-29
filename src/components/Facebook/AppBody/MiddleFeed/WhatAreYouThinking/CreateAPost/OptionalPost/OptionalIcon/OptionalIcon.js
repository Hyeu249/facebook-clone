import React, { Fragment } from "react";

function OptionalIcon({
  id,
  Icon,
  className,
  onClick,
  background,
  isPostImage,
}) {
  //Return JSX
  return (
    <Fragment>
      {!background && (
        <input
          type="checkbox"
          id={id}
          checked={isPostImage}
          readOnly
          style={{ position: "absolute", width: "1px", zIndex: "-100" }}
        />
      )}
      <label
        htmlFor={id}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "36px",
          height: "36px",
          cursor: "pointer",
          userSelect: "none",
        }}
        className={className}
        onClick={onClick}
      >
        <Icon style={{ fill: background ? "#b8b8b8" : "#45c045" }} />
      </label>
    </Fragment>
  );
}

export default OptionalIcon;
