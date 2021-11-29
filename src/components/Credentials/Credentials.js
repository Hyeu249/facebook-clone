import { Fragment } from "react";
import MainCredentials from "./MainCredentials/MainCredentials";
import FooterCredentials from "./FooterCredentials/FooterCredentials";

const Credentials = () => {
  return (
    <Fragment>
      <MainCredentials />
      <FooterCredentials />
    </Fragment>
  );
};

export default Credentials;
