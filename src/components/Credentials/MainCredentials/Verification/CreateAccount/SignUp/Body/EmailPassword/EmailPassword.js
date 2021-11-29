import EmailPasswordInput from "./EmailPasswordInput/EmailPasswordInput";
import { Fragment } from "react";

const EmailPassword = (props) => {
  //input register array
  const inputRegisterData = [
    {
      validation: "isEmail",
      _ref: props._ref.ref_mobileAddress,
      textErr:
        "You'll use this when you log in and if you ever need to reset your password.",
      id: "mobileAddressRegister",
      valueLabel: "Mobile number or email address",
      type: "email",
    },
    {
      validation: "isStrongPassword",
      _ref: props._ref.ref_password,
      textErr:
        "Enter a combination of at least eight letters(lower & upper case), numbers and punctuation marks (such as ! and &)",
      id: "passwordRegister",
      valueLabel: "Password",
      type: "password",
    },
  ];

  //Return JXS
  return (
    <Fragment>
      {inputRegisterData.map((prop) => (
        <EmailPasswordInput
          key={prop.id}
          validation={prop.validation}
          _ref={prop._ref}
          textErr={prop.textErr}
          id={prop.id}
          valueLabel={prop.valueLabel}
          type={prop.type}
        />
      ))}
    </Fragment>
  );
};

export default EmailPassword;
