const EyesHide = (props) => {
  return (
    <i
      className={`far fa-eye-slash `}
      onClick={() => props.setType("text")}
    ></i>
  );
};

export default EyesHide;
