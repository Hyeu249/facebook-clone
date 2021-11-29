import { Fragment } from "react";
import Sponsored from "./Sponsored/Sponsored";
import Contacts from "./Contacts/Contacts";

function Widgets({ userFacebook, theRestUsers }) {
  return (
    <Fragment>
      <Sponsored />
      <div
        style={{
          border: "1px solid #dbdbdb",
          width: "calc(80% - 6px)",
          margin: "8px 8px 8px 0px",
        }}
      ></div>
      <Contacts userFacebook={userFacebook} theRestUsers={theRestUsers} />
    </Fragment>
  );
}

export default Widgets;
