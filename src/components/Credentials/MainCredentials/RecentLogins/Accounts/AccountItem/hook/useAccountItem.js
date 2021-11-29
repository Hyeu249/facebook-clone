import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setRecentUsers } from "../../../../../../../store/credentials/credentialsSlice";

const useAccountItem = () => {
  //dispatch
  const dispatch = useDispatch();

  //state
  const [isLogin, setIsLogin] = useState(false);

  const callBack = useCallback(
    ({ email } = {}) => {
      //Sign in
      const signInHandle = (e) => {
        setIsLogin(true);
      };

      // delete recent account
      const deleteRecentAccHandle = (e) => {
        e.stopPropagation();

        let accountsData = JSON.parse(localStorage.getItem("recentUsers"));

        accountsData = accountsData.filter((acc) => {
          return !(acc.email === email);
        });

        localStorage.setItem("recentUsers", JSON.stringify(accountsData));

        dispatch(setRecentUsers(accountsData));
      };

      return {
        signInHandle,
        deleteRecentAccHandle,
      };
    },
    [dispatch]
  );

  return { isLogin, setIsLogin, callBack };
};

export default useAccountItem;
