import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import validator from "validator";
import { setIsLogin } from "../../../../../../../../store/credentials/credentialsSlice";
import useHttp from "../../../../../../../../hooks/use-http/use-http";
import avatarRegister from "../../../../../../../../img/avatarRegister.jpg";
import avatarRegisterWoman from "../../../../../../../../img/avatarRegisterWoman.png";
import avatarIconLarge from "../../../../../../../../img/avatarIconLarge.png";
import db, { ref, onValue, set } from "../../../../../../../../firebase";
import { v4 as uuidv4 } from "uuid";

const useBodyLocal = (setIsSignUp) => {
  //dispatch
  const dispatch = useDispatch();

  //state
  const [isrequestSignUp, setIsRequestSignUp] = useState(false);
  const [users, setUsers] = useState([]);

  //Create ref
  const ref_firstName = useRef();
  const ref_surName = useRef();
  const ref_mobileAddress = useRef();
  const ref_password = useRef();
  const ref_date = useRef();
  const ref_month = useRef();
  const ref_year = useRef();
  const ref_female = useRef();
  const ref_male = useRef();
  const ref_custom = useRef();
  const ref_optionalGender = useRef();
  const ref_selectPronoun = useRef();

  //hook http
  const { sendRequest } = useHttp();

  //useEffect
  useEffect(() => {
    //firebase on, set
    const userFirebase = ref(db, `users`);
    onValue(userFirebase, (snapshot) => {
      const users = Object.values(snapshot.val() || "");

      setUsers(users);
    });
  }, []);
  //CallBack
  const callBack = useCallback(() => {
    const registerUserFacebook = () => {
      const name = `${ref_surName?.current?.value} ${ref_firstName?.current?.value}`;
      const date = ref_date?.current?.value;
      const month = ref_month?.current?.value;
      const year = ref_year?.current?.value;
      //gender value
      const female = ref_female?.current?.value;
      const male = ref_male?.current?.value;
      // const custom = ref_custom?.current?.value;
      //gender checked
      const isFemale = ref_female?.current?.checked;
      const isMale = ref_male?.current?.checked;
      const isCustom = ref_custom?.current?.checked;
      //custom gender
      const gender = ref_optionalGender?.current?.value;
      const pronoun = ref_selectPronoun?.current?.value;
      const lengthUsers = users.length;

      //pronoun
      const myPronoun = pronoun || (isFemale && "She") || (isMale && "He");
      const myAvatar =
        (myPronoun === "He" && avatarRegister) ||
        (myPronoun === "She" && avatarRegisterWoman) ||
        (myPronoun === "They" && avatarIconLarge);
      let body = {
        _id: uuidv4().replace(/-/g, "a"),
        idPath: `${lengthUsers + 1}${name}`,
        name: name,
        email: ref_mobileAddress?.current?.value,
        password: ref_password?.current?.value,
        birthDay: `${date} ${month} ${year}`,
        gender:
          (isFemale && female) || (isMale && male) || (isCustom && gender),
        pronoun: myPronoun,
        _avatar: myAvatar,
        status: false,
        channels: JSON.stringify([]),
      };

      const isSameEmail = users.filter((data) => data?.email === body?.email);
      if (!(isSameEmail.length > 0)) {
        set(ref(db, `users/${lengthUsers + 1}${name}`), body);
        sendRequest(body).then(() => {
          dispatch(setIsLogin(true));
        });
      } else {
        alert("The same email, please chose another one💎");
        window.location.reload();
      }

      //end
      return true;
    };

    const validationRegister = () => {
      const currentYear = Number(new Date().getFullYear());

      return (
        !validator.isEmpty(ref_firstName?.current?.value) &&
        !validator.isEmpty(ref_surName?.current?.value) &&
        validator.isEmail(ref_mobileAddress?.current?.value) &&
        validator.isStrongPassword(ref_password?.current?.value) &&
        currentYear - ref_year?.current?.value >= 13 &&
        (ref_female?.current?.checked ||
          ref_male?.current?.checked ||
          ref_custom?.current?.checked)
      );
    };

    //send request
    const sendRegisterHandle = (e) => {
      e.preventDefault();
      if (!isrequestSignUp) {
        //focus input
        ref_surName?.current?.focus();
        ref_mobileAddress?.current?.focus();
        ref_password?.current?.focus();
        ref_year?.current?.focus();
        ref_female?.current?.focus();
        //validator
        validationRegister() &&
          registerUserFacebook() &&
          setIsRequestSignUp(true);
      }
    };

    return { sendRegisterHandle };
  }, [isrequestSignUp, users, dispatch, sendRequest]);

  return {
    _ref: {
      ref_firstName,
      ref_surName,
      ref_mobileAddress,
      ref_password,
      ref_date,
      ref_month,
      ref_year,
      ref_female,
      ref_male,
      ref_custom,
      ref_optionalGender,
      ref_selectPronoun,
    },
    isrequestSignUp,
    callBack,
  };
};

export default useBodyLocal;
