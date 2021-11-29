import { useCallback } from "react";

const useHttp = () => {
  //APi
  const sendRequest = useCallback(async (data) => {
    delete data.password;
    try {
      //localstorage userFacebook
      localStorage.setItem("userFacebook", JSON.stringify(data));

      //localStorage recent user
      const oldRecentUsers = JSON.parse(localStorage.getItem("recentUsers"));

      if (!oldRecentUsers) {
        localStorage.setItem("recentUsers", JSON.stringify([data]));
      } else {
        const recentUsers = oldRecentUsers.filter((user) => {
          return user.email !== data.email;
        });
        recentUsers.push(data);
        localStorage.setItem("recentUsers", JSON.stringify(recentUsers));
      }

      return true;
    } catch (e) {
      alert("catch: ", e);
    }
  }, []);

  return {
    sendRequest,
  };
};

export default useHttp;
