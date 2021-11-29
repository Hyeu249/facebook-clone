import { Fragment } from "react";

const SetUpTwo = (props) => {
  return (
    <Fragment>
      <a href="https://httpstatuses.com/" className={props.className}>
        {props.text}
      </a>
      {!props.img || (
        <img
          src={props.img}
          alt="AdChoices"
          width="12px"
          style={{
            position: "relative",
            left: "-17px",
            top: "2.5px",
            cursor: "pointer",
          }}
        />
      )}
    </Fragment>
  );
};

export default SetUpTwo;
