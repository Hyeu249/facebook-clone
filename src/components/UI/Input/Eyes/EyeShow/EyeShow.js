const EyeShow = (props) => {
  return (
    <i className={`far fa-eye `} onClick={() => props.setType("password")}></i>
  );
};

export default EyeShow;
