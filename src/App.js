import { Fragment } from "react";
import { useSelector } from "react-redux";
import Credentials from "./components/Credentials/Credentials";
import Facebook from "./components/Facebook/Facebook";

function App() {
  const isLogin = useSelector((state) => state.isLogin);

  //Return JXS
  return (
    <Fragment>
      {!isLogin && <Credentials />}
      {isLogin && <Facebook />}
    </Fragment>
  );
}

export default App;
