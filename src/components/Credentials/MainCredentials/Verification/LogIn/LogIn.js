import useLoginLocal from "./hook/useLoginLocal";
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";

const LogIn = () => {
  //custom hooks
  const { ref_email, ref_password, isRequestLogin, callBack } = useLoginLocal();
  const { inputEmailHandle, inputPassHandle, requestLoginHandle } = callBack();

  //gather input email & pass
  const inputEMail = ref_email?.current?.value;
  const inputPass = ref_password?.current?.value;

  //Return JXS
  return (
    <form onSubmit={requestLoginHandle}>
      <Input
        id="loginEmail"
        valueLabel={inputEMail ? "" : "Email address or phone number"}
        onChange={inputEmailHandle}
        ref={ref_email}
      />
      <Input
        id="loginPass"
        valueLabel={inputPass ? "" : "Password"}
        type="password"
        onChange={inputPassHandle}
        ref={ref_password}
      />
      <Button value="Log In" waiting={isRequestLogin} />
    </form>
  );
};

export default LogIn;
