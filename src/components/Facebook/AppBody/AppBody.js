import SideBar from "./SideBar/SideBar";
import MiddleFeed from "./MiddleFeed/MiddleFeed";
import Widgets from "./Widgets/Widgets";
import classes from "./AppBody.module.css";

function AppBody({ userFacebook, theRestUsers }) {
  return (
    <div className="grid" style={{ marginTop: "54px" }}>
      <div className={`${classes.flexStart} row justify_center`}>
        <div
          className={`${classes.SideBar} col l-3 tablet__hidden mobile__hidden`}
          style={{
            position: "fixed",
            left: "0",
            width: "100%",
          }}
        >
          <SideBar userFacebook={userFacebook} />
        </div>
        <div className={`${classes.MiddleFeed} col l-6 m-9 c-12`}>
          <MiddleFeed userFacebook={userFacebook} />
        </div>
        <div
          className={`${classes.Widgets} col l-3 m-3 mobile__hidden`}
          style={{
            position: "fixed",
            right: "0",
            height: "100vh",
            width: "100%",
          }}
        >
          <Widgets userFacebook={userFacebook} theRestUsers={theRestUsers} />
        </div>
      </div>
    </div>
  );
}

export default AppBody;
