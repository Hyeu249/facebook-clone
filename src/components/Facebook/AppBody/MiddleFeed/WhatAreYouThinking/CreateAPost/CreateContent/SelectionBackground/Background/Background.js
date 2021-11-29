import React, { Fragment } from "react";

function Background({ id, image, bG, defaultChecked, className, onClick }) {
  return (
    <Fragment>
      <input
        type="radio"
        name="backgroundCreatePost"
        id={id}
        style={{
          position: "absolute",
          border: "none",
          width: "1px",
          zIndex: "-100",
        }}
        defaultChecked={defaultChecked}
      />
      <label
        htmlFor={id}
        className={className}
        style={{
          backgroundColor: bG,
          backgroundImage: `url(${image})`,
          backgroundSize: "100%",
        }}
        onClick={onClick}
      ></label>
    </Fragment>
  );
}

export default Background;
