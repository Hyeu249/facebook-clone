import { useCallback, useState, useRef, useEffect } from "react";
import validator from "validator";
import useHttp from "../../../../../../hooks/use-http/use-http";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../../../../../store/credentials/credentialsSlice";
import db, { ref, onValue } from "../../../../../../firebase";

const useLoginLocal = () => {
  //dispatch
  const dispatch = useDispatch();

  //State
  const [inputEMailState, setInputEmailState] = useState();
  const [inputPassState, setInputPassState] = useState();
  const [isRequestLogin, setIsRequestLogin] = useState(false);

  //create ref
  const ref_email = useRef();
  const ref_password = useRef();

  //hook http
  const { sendRequest } = useHttp();

  //useEffect
  useEffect(() => {
    if (!isRequestLogin) return;

    let body = {
      email: ref_email.current.value,
      password: ref_password.current.value,
    };

    //firebase
    const userFirebase = ref(db, `users`);
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
  }, [isRequestLogin, sendRequest, dispatch]);

  const callBack = useCallback(() => {
    //Input Email Handle
    const inputEmailHandle = (e) => {
      setInputEmailState(e.target.value);
    };

    //Input Pass Handle
    const inputPassHandle = (e) => {
      setInputPassState(e.target.value);
    };

    //request
    const requestLoginHandle = (e) => {
      e.preventDefault();

      if (
        !isRequestLogin &&
        validator.isStrongPassword(ref_password.current.value)
      ) {
        setIsRequestLogin(true);
      }
    };

    return {
      inputEmailHandle,
      inputPassHandle,
      requestLoginHandle,
    };
  }, [isRequestLogin]);
  return {
    inputEMailState,
    inputPassState,
    isRequestLogin,
    ref_email,
    ref_password,
    callBack,
  };
};

export default useLoginLocal;

//  //hook http
//  const { sendRequest } = useHttp();

//  //useEffect
//  useEffect(() => {
//    if (!isrequestSignUp) return;

//    const body = {
//      name: `${surName} ${firstName}`,
//      email: emailPhone,
//      password: password,
//      birthDay: `${date} ${month} ${year}`,
//      gender: (isFemale && female) || (isMale && male) || (isCustom && gender),
//      pronoun: pronoun || (isFemale && "she") || (isMale && "he"),
//      _avatar:
//        "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.30497-1/c47.0.160.160a/p160x160/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=W6gaDsnbb3IAX9zvawf&_nc_ht=scontent.fsgn2-4.fna&oh=ed938c6363743e732c31470ed0bdb431&oe=61A459A4",
//    };

//    const headerRequest = {
//      url: "https://hieu-taskmanager.herokuapp.com/users",
//      method: "post",
//      body,
//    };

//    sendRequest(headerRequest).then((announce) => setIsSignUp(false));
//    //dependence
//  }, [
//    firstName,
//    surName,
//    emailPhone,
//    password,
//    date,
//    month,
//    year,
//    female,
//    isFemale,
//    male,
//    isMale,
//    custom,
//    isCustom,
//    gender,
//    pronoun,
//    isrequestSignUp,
//    setIsSignUp,
//    sendRequest,
//  ]);
