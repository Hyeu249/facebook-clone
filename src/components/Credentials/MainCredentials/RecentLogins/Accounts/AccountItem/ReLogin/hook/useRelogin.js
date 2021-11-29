import { useRef, useCallback, useState, useEffect } from "react";
import validator from "validator";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../../../../../../../store/credentials/credentialsSlice";
import useHttp from "../../../../../../../../hooks/use-http/use-http";
import db, {
  ref as refFirebase,
  onValue,
} from "../../../../../../../../firebase";

const useReLogin = (infoUserFacebook) => {
  // dispatch
  const dispatch = useDispatch();

  //props
  const {
    infoUserFacebook: { email, _avatar, name },
  } = infoUserFacebook;

  //state
  const [enteredPass, setEnteredPass] = useState();
  const [enteredEmail, setEnteredEmail] = useState();
  const [isRequestLogin, setIsRequestLogin] = useState(false);

  //ref
  const ref = useRef();
  const ref_email = useRef();

  //request api
  const { sendRequest } = useHttp();

  useEffect(() => {
    if (!isRequestLogin) return;

    let body = {
      email: email || ref_email.current.value,
      password: ref.current.value,
    };

    //firebase
    const userFirebase = refFirebase(db, `users`);
    onValue(userFirebase, (snapshot) => {
      if (body) {
        const users = Object.values(snapshot.val());
        const havetargetUser = users.filter((data) => {
          return data.email === body.email && data.password === body.password;
        });
        if (havetargetUser.length > 0) {
          sendRequest(havetargetUser[0]).then(() => dispatch(setIsLogin(true)));
          body = false;
        } else {
          alert("Please try another account💥");
          window.location.reload();
        }
      }
    });

    // sendRequest(headerRequest).then(() => dispatch(setIsLogin(true)));
  }, [dispatch, isRequestLogin, sendRequest, email]);

  const callBack = useCallback(() => {
    const sendRequestHandle = (e) => {
      e.preventDefault();
      if (isRequestLogin || !validator.isStrongPassword(ref.current.value)) {
        return;
      }
      setIsRequestLogin(true);
    };

    return { sendRequestHandle };
  }, [isRequestLogin]);

  return {
    email,
    _avatar,
    name,
    ref,
    ref_email,
    enteredEmail,
    enteredPass,
    isRequestLogin,
    setEnteredEmail,
    setEnteredPass,
    callBack,
  };
};

export default useReLogin;
