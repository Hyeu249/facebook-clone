import Header from "./Header/Header";
import AppBody from "./AppBody/AppBody";
import { Fragment, useEffect, useState } from "react";
import db, { ref, onValue, update, onDisconnect } from "../../firebase";

const Facebook = () => {
  //localStorage
  const userCurrentLocalStorage = JSON.parse(
    localStorage.getItem("userFacebook")
  );
  //state
  const [users, setUsers] = useState({
    userFacebook: userCurrentLocalStorage,
  });
  //Destructoring
  const { _id, idPath } = userCurrentLocalStorage;

  //useEffect
  useEffect(() => {
    onValue(ref(db, `users/`), (snapshot) => {
      const userCurrentLogin = Object.values(snapshot.val()).filter((data) => {
        return data._id === _id;
      });
      const theRestUsers = Object.values(snapshot.val()).filter((data) => {
        return !(data._id === _id);
      });
      setUsers({ userFacebook: userCurrentLogin[0], theRestUsers });
      //onConnected

      if (userCurrentLogin[0].status === false) {
        update(ref(db, `users/${idPath}`), {
          status: true,
        });
        //onDisconnect
        onDisconnect(ref(db, `users/${idPath}`)).update({
          status: false,
        });
      }
    });
  }, [_id, idPath]);

  //Return JSX
  return (
    <Fragment>
      <Header userFacebook={users.userFacebook} />
      <AppBody
        userFacebook={users.userFacebook}
        theRestUsers={users.theRestUsers}
      />
    </Fragment>
  );
};

export default Facebook;
