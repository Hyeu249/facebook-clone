import iconPureFB from "../img/iconPureFB.png";
import likedFacebook from "../img/likedFacebook.png";
import gradientStory from "../img/gradientStory.png";
import classes from "./iconsFacebook.module.css";

//WriteNewMess
const WriteNewMess = ({ className, style, styleI, onClick }) => {
  return (
    <div
      className={`${className}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "1px 2px 7px #b1b1b1",
        ...style,
      }}
      onClick={onClick}
    >
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/7wjQT7HUABf.png)",
          backgroundPosition: "-105px -107px",
          backgroundSize: "auto",
          width: "20px",
          height: "20px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          ...styleI,
        }}
      ></i>
    </div>
  );
};

//EnterFromMessenger
const EnterFromMessenger = ({ className, styleSvg, style, onMouseDown }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "20px", ...style }}
      onMouseDown={onMouseDown}
    >
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <path
          d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
          fillRule="evenodd"
          // stroke="none"
        ></path>
      </svg>
    </div>
  );
};

//SmileIconFromMessenger
const SmileIconFromMessenger = ({ className, styleSvg, style }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "20px", ...style }}
    >
      <svg
        height="20px"
        viewBox="0 0 38 38"
        width="20px"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <g fillRule="evenodd">
          <g transform="translate(-893.000000, -701.000000)">
            <g transform="translate(709.000000, 314.000000)">
              <g>
                <path d="M210.5,405 C209.121,405 208,403.879 208,402.5 C208,401.121 209.121,400 210.5,400 C211.879,400 213,401.121 213,402.5 C213,403.879 211.879,405 210.5,405 M212.572,411.549 C210.428,413.742 206.938,415 203,415 C199.062,415 195.572,413.742 193.428,411.549 C192.849,410.956 192.859,410.007 193.451,409.428 C194.045,408.85 194.993,408.859 195.572,409.451 C197.133,411.047 199.909,412 203,412 C206.091,412 208.867,411.047 210.428,409.451 C211.007,408.859 211.956,408.85 212.549,409.428 C213.141,410.007 213.151,410.956 212.572,411.549 M195.5,400 C196.879,400 198,401.121 198,402.5 C198,403.879 196.879,405 195.5,405 C194.121,405 193,403.879 193,402.5 C193,401.121 194.121,400 195.5,400 M203,387 C192.523,387 184,395.523 184,406 C184,416.477 192.523,425 203,425 C213.477,425 222,416.477 222,406 C222,395.523 213.477,387 203,387"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

//LikeFromMessenger
const LikeFromMessenger = ({ className, styleSvg, style }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "20px", ...style }}
    >
      <svg
        viewBox="0 0 16 16"
        height="20"
        width="20"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <path d="M16,9.1c0-0.8-0.3-1.1-0.6-1.3c0.2-0.3,0.3-0.7,0.3-1.2c0-1-0.8-1.7-2.1-1.7h-3.1c0.1-0.5,0.2-1.3,0.2-1.8 c0-1.1-0.3-2.4-1.2-3C9.3,0.1,9,0,8.7,0C8.1,0,7.7,0.2,7.6,0.4C7.5,0.5,7.5,0.6,7.5,0.7L7.6,3c0,0.2,0,0.4-0.1,0.5L5.7,6.6 c0,0-0.1,0.1-0.1,0.1l0,0l0,0L5.3,6.8C5.1,7,5,7.2,5,7.4v6.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,1,1,2,1h5.2c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.5,0.2-1,0.1-1.4c0.5-0.2,0.9-0.5,1.1-1.2c0.1-0.4,0-0.8-0.2-1C15.6,10.3,16,9.9,16,9.1z"></path>
        <path d="M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z"></path>
      </svg>
    </div>
  );
};

//GifFromMessenger
const GifFromMessenger = ({ className, styleSvg, style }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "20px", ...style }}
    >
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 16 16"
        height="20px"
        width="20px"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <path
          d="M.783 12.705c.4.8 1.017 1.206 1.817 1.606 0 0 1.3.594 2.5.694 1 .1 1.9.1 2.9.1s1.9 0 2.9-.1 1.679-.294 2.479-.694c.8-.4 1.157-.906 1.557-1.706.018 0 .4-1.405.5-2.505.1-1.2.1-3 0-4.3-.1-1.1-.073-1.976-.473-2.676-.4-.8-.863-1.408-1.763-1.808-.6-.3-1.2-.3-2.4-.4-1.8-.1-3.8-.1-5.7 0-1 .1-1.7.1-2.5.5s-1.417 1.1-1.817 1.9c0 0-.4 1.484-.5 2.584-.1 1.2-.1 3 0 4.3.1 1 .2 1.705.5 2.505zm10.498-8.274h2.3c.4 0 .769.196.769.696 0 .5-.247.68-.747.68l-1.793.02.022 1.412 1.252-.02c.4 0 .835.204.835.704s-.442.696-.842.696H11.82l-.045 2.139c0 .4-.194.8-.694.8-.5 0-.7-.3-.7-.8l-.031-5.631c0-.4.43-.696.93-.696zm-3.285.771c0-.5.3-.8.8-.8s.8.3.8.8l-.037 5.579c0 .4-.3.8-.8.8s-.8-.4-.8-.8l.037-5.579zm-3.192-.825c.7 0 1.307.183 1.807.683.3.3.4.7.1 1-.2.4-.7.4-1 .1-.2-.1-.5-.3-.9-.3-1 0-2.011.84-2.011 2.14 0 1.3.795 2.227 1.695 2.227.4 0 .805.073 1.105-.127V8.6c0-.4.3-.8.8-.8s.8.3.8.8v1.8c0 .2.037.071-.063.271-.7.7-1.57.991-2.47.991C2.868 11.662 1.3 10.2 1.3 8s1.704-3.623 3.504-3.623z"
          fillRule="nonzero"
        ></path>
      </svg>
    </div>
  );
};

//StickerFromMessenger
const StickerFromMessenger = ({ className, styleSvg, style }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "20px", ...style }}
    >
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 17 16"
        height="20px"
        width="20px"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <g fillRule="evenodd">
          <circle fill="none" cx="5.5" cy="5.5" r="1"></circle>
          <circle fill="none" cx="11.5" cy="4.5" r="1"></circle>
          <path
            d="M5.3 9c-.2.1-.4.4-.3.7.4 1.1 1.2 1.9 2.3 2.3h.2c.2 0 .4-.1.5-.3.1-.3 0-.5-.3-.6-.8-.4-1.4-1-1.7-1.8-.1-.2-.4-.4-.7-.3z"
            fill="none"
          ></path>
          <path d="M10.4 13.1c0 .9-.4 1.6-.9 2.2 4.1-1.1 6.8-5.1 6.5-9.3-.4.6-1 1.1-1.8 1.5-2 1-3.7 3.6-3.8 5.6z"></path>
          <path
            d="M2.5 13.4c.1.8.6 1.6 1.3 2 .5.4 1.2.6 1.8.6h.6l.4-.1c1.6-.4 2.6-1.5 2.7-2.9.1-2.4 2.1-5.4 4.5-6.6 1.3-.7 1.9-1.6 1.9-2.8l-.2-.9c-.1-.8-.6-1.6-1.3-2-.7-.5-1.5-.7-2.4-.5L3.6 1.5C1.9 1.8.7 3.4 1 5.2l1.5 8.2zm9-8.9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3.57 6.662c.3.1.4.4.3.6-.1.3-.3.4-.5.4h-.2c-1-.4-1.9-1.3-2.3-2.3-.1-.3.1-.6.3-.7.3-.1.5 0 .6.3.4.8 1 1.4 1.8 1.7zM5.5 5.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </div>
  );
};

//ImageFromMessenger
const ImageFromMessenger = ({ className, styleSvg, style }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "20px", ...style }}
    >
      <svg
        viewBox="0 0 24 24"
        width="20px"
        height="20px"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <g fillRule="evenodd" transform="translate(-444 -156)">
          <g>
            <path
              d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
              transform="translate(352 156.5)"
            ></path>
            <path
              fillRule="nonzero"
              d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
              transform="translate(352 156.5)"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

//PlusfromMessenger
const PlusfromMessenger = ({ className, styleSvg, style }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "20px", ...style }}
    >
      <svg
        viewBox="0 0 24 24"
        height="20px"
        width="20px"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <g fillRule="evenodd">
          <polygon fill="none" points="-6,30 30,30 30,-6 -6,-6 "></polygon>
          <path d="m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12"></path>
        </g>
      </svg>
    </div>
  );
};

//XFromMessengerIcon
const XFromMessengerIcon = ({ className, styleSvg, style, onClick }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "26px", ...style }}
      onClick={onClick}
    >
      <svg
        width="26px"
        height="26px"
        viewBox="-4 -4 24 24"
        style={{ stroke: "#adadad", ...styleSvg }}
      >
        <line
          x1="2"
          x2="14"
          y1="2"
          y2="14"
          strokeLinecap="round"
          strokeWidth="2"
          // stroke="#bec2c9"
        ></line>
        <line
          x1="2"
          x2="14"
          y1="14"
          y2="2"
          strokeLinecap="round"
          strokeWidth="2"
          // stroke="#bec2c9"
        ></line>
      </svg>
    </div>
  );
};

//GạchNgangFromMessengerIcon
const GạchNgangFromMessengerIcon = ({ className, styleSvg, style }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "26px", ...style }}
    >
      <svg
        width="26px"
        height="26px"
        viewBox="-4 -4 24 24"
        style={{ stroke: "#adadad", ...styleSvg }}
      >
        <line
          x1="2"
          x2="14"
          y1="8"
          y2="8"
          strokeLinecap="round"
          strokeWidth="2"
        ></line>
      </svg>
    </div>
  );
};

//PhoneFromMessengerIcon
const PhoneFromMessengerIcon = ({ className, styleSvg, style }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "26px", ...style }}
    >
      <svg
        role="presentation"
        width="26px"
        height="26px"
        viewBox="-5 -5 30 30"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <path d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648a15.9 15.9 0 011.713 1.147c.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"></path>
        <path
          d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648.824.484 1.394.898 1.713 1.147.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
          stroke="#bec2c9"
        ></path>
      </svg>
    </div>
  );
};

//VideoFromMessengerIcon
const VideoFromMessengerIcon = ({ className, styleSvg, style }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "26px", ...style }}
    >
      <svg
        role="presentation"
        width="26px"
        height="26px"
        viewBox="-5 -5 30 30"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <path d="M19.492 4.112a.972.972 0 00-1.01.063l-3.052 2.12a.998.998 0 00-.43.822v5.766a1 1 0 00.43.823l3.051 2.12a.978.978 0 001.011.063.936.936 0 00.508-.829V4.94a.936.936 0 00-.508-.828zM10.996 18A3.008 3.008 0 0014 14.996V5.004A3.008 3.008 0 0010.996 2H3.004A3.008 3.008 0 000 5.004v9.992A3.008 3.008 0 003.004 18h7.992z"></path>
      </svg>
    </div>
  );
};

//ThreeDotContactsIcon
const ThreeDotContactsIcon = ({ className, styleSvg, style }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "1em", ...style }}
    >
      <svg
        viewBox="0 0 20 20"
        width="1em"
        height="1em"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <g fillRule="evenodd" transform="translate(-446 -350)">
          <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
        </g>
      </svg>
    </div>
  );
};

//SearchIcon
const SearchContactsIcon = ({ className, style, styleSvg }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "1em", ...style }}
    >
      <svg
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <g fillRule="evenodd" transform="translate(-448 -544)">
          <g fillRule="nonzero">
            <path
              d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
              transform="translate(448 544)"
            ></path>
            <path
              d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
              transform="translate(448 544)"
            ></path>
            <path
              d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
              transform="translate(448 544)"
            ></path>
            <path
              d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
              transform="translate(448 544)"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

//roomIcon
const RoomVideoIcon = ({ className, style, styleSvg }) => {
  return (
    <div
      className={`${className} ${classes.paddingMarginLeftCursorDivIcon}`}
      style={{ height: "1em", ...style }}
    >
      <svg
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        style={{ fill: "#adadad", ...styleSvg }}
      >
        <g fillRule="evenodd" transform="translate(-448 -544)">
          <path d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602"></path>
        </g>
      </svg>
    </div>
  );
};

//addMoreImgIcon
const AddMoreImgIcon = ({ styleI, style, className }) => {
  return (
    <div className={className} style={{ height: "20px", ...style }}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/gtm6MuOzn37.png)",
          backgroundPosition: "-21px -582px",
          backgroundSize: "auto",
          width: "20px",
          height: "20px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          ...styleI,
        }}
      ></i>
    </div>
  );
};

//stickerSmallicon
const StickerSmallIcon = ({ className, style }) => {
  return (
    <div className={className} style={{ height: "16px", ...style }}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/2orsmKTeq9e.png)",
          backgroundPosition: "0px -539px",
          backgroundSize: "auto",
          width: "16px",
          height: "16px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          filter: "brightness(0) invert(0.4)",
        }}
      ></i>
    </div>
  );
};

//gifSmalicon
const GifSmallIcon = ({ className, style }) => {
  return (
    <div className={className} style={{ height: "16px", ...style }}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/2orsmKTeq9e.png)",
          backgroundPosition: "0px -488px",
          backgroundSize: "auto",
          width: "16px",
          height: "16px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          filter: "brightness(0) invert(0.4)",
        }}
      ></i>
    </div>
  );
};

//SmileSmallIcon
const SmileSmallIcon = ({ className, style }) => {
  return (
    <div className={className} style={{ height: "16px", ...style }}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/2orsmKTeq9e.png)",
          backgroundPosition: "0px -471px",
          backgroundSize: "auto",
          width: "16px",
          height: "16px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          filter: "brightness(0) invert(0.4)",
        }}
      ></i>
    </div>
  );
};

//clickedLikeIcon
const ClickedLikeIcon = ({ className, style, onClick }) => {
  return (
    <img
      src={likedFacebook}
      alt="liked"
      className={className}
      style={{ width: "26px", height: "26px", ...style }}
      onClick={onClick}
    />
  );
};

//ShareActiveIcon
const ShareActiveIcon = ({ className, style }) => {
  return (
    <div className={className} style={{ height: "18px", ...style }}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/VjuIXYB19ZS.png)",
          backgroundPosition: "0px -262px",
          backgroundSize: "auto",
          width: "18px",
          height: "18px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          filter: "brightness(0) invert(0.4)",
        }}
      ></i>
    </div>
  );
};

//commentActiveIcon
const CommentActiveIcon = ({ className, style }) => {
  return (
    <div className={className} style={{ height: "18px", ...style }}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/VjuIXYB19ZS.png)",
          backgroundPosition: "0px -205px",
          backgroundSize: "auto",
          width: "18px",
          height: "18px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          filter: "brightness(0) invert(0.4)",
        }}
      ></i>
    </div>
  );
};

//LikeActiveIcon
const LikeActiveIcon = ({ className, style }) => {
  return (
    <div className={className} style={{ height: "18px", ...style }}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/VjuIXYB19ZS.png)",
          backgroundPosition: "0px -243px",
          backgroundSize: "auto",
          width: "18px",
          height: "18px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          filter: "brightness(0) invert(0.4)",
        }}
      ></i>
    </div>
  );
};

//LikeIconFacebook
const LikeIcon = ({ className, style, onClick }) => {
  const img =
    "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e";
  return (
    <img
      src={img}
      alt="Like icon"
      style={{ ...style }}
      className={className}
      onClick={onClick}
    />
  );
};

//LoveIconFacebook
const LoveIcon = ({ style, className, onClick }) => {
  const img =
    "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e";
  return (
    <img
      src={img}
      alt="Love icon"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

//wolrdIcon
const WordSmallIcon = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width="12px"
      height="12px"
      className={className}
      style={{ ...style }}
      title="Shared with Public"
    >
      <title>Shared with Public</title>
      <g fillRule="evenodd" transform="translate(-448 -544)">
        <g>
          <path
            d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
            transform="translate(354 143.5)"
          ></path>
          <path
            d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
            transform="translate(354 143.5)"
          ></path>
          <path
            fillRule="nonzero"
            d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
            transform="translate(354 143.5)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

//ThreeDotIcon
const ThreeDotIcon = ({ className, style }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <i
        data-visualcompletion="css-img"
        style={{
          height: "24px",
          width: "24px",
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/yRHy04YOWar.png)",
          backgroundPosition: "0px -158px",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
        }}
      ></i>
    </div>
  );
};

//CheckInICon
const CheckInIcon = ({ className, style }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <i
        data-visualcompletion="css-img"
        style={{
          height: "24px",
          width: "24px",
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/HyeXO0sd7uk.png)",
          backgroundPosition: "0px -225px",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
        }}
      ></i>
    </div>
  );
};

//Tag People icon
const TagPeopleIcon = ({ className, style }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <i
        data-visualcompletion="css-img"
        style={{
          height: "24px",
          width: "24px",
          backgroundImage:
            " url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/yRHy04YOWar.png)",
          backgroundPosition: "0px -258px",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
        }}
      ></i>
    </div>
  );
};

//fellingIcon
const FellingPostIcon = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      className={className}
      style={{ fill: "orange", ...style }}
    >
      <g fillRule="evenodd" transform="translate(-444 -156)">
        <g>
          <path
            d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
            transform="translate(353.5 156.5)"
          ></path>
          <path
            fillRule="nonzero"
            d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
            transform="translate(353.5 156.5)"
          ></path>
          <path
            d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
            transform="translate(353.5 156.5)"
          ></path>
        </g>
      </g>
    </svg>
  );
};
//photoPostIcon
const PhotoPostIcon = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      className={className}
      style={{ fill: "#45c045", ...style }}
    >
      <g fillRule="evenodd" transform="translate(-444 -156)">
        <g>
          <path
            d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
            transform="translate(352 156.5)"
          ></path>
          <path
            fillRule="nonzero"
            d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
            transform="translate(352 156.5)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

// live icon
const LiveVideoIcon = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      className={className}
      style={{ fill: "#f03030", ...style }}
    >
      <g fillRule="evenodd" transform="translate(-444 -156)">
        <g>
          <path
            d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
            transform="translate(354 158.5)"
          ></path>
          <path
            d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
            transform="translate(354 158.5)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

//Create a text story
const CreateAPhotoStory = ({ className, style }) => {
  return (
    <i
      className={className}
      data-visualcompletion="css-img"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${gradientStory})`,
        backgroundSize: "auto",
        width: "220px",
        height: "330px",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        userSelect: "none",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PhotoBlack
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            fontSize: "10pt",
            fontWeight: "bold",
            fontStyle: "normal",
            color: "#fff",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
          }}
        >
          Can't create a Photo Story
        </div>
      </div>
    </i>
  );
};

//Create a text story
const CreateATextStory = ({ className, style, setSettingStory }) => {
  return (
    <i
      onClick={() => setSettingStory(true)}
      className={className}
      data-visualcompletion="css-img"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${gradientStory})`,
        backgroundPosition: "0px -331px",
        backgroundSize: "auto",
        width: "220px",
        height: "330px",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        userSelect: "none",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontStyle: "normal",
            marginBottom: "12px",
            padding: "10.5px",
            fontWeight: "600",
            fontSize: "20px",
            backgroundColor: "#fff",
            borderRadius: "25px",
            boxShadow: "0 1px 5px #797979",
            fontFamily:
              "Trebuchet MS, Lucida Sans Unicode, Lucida Grande,LucidaSans, Arial, sans-serif",
          }}
        >
          Aa
        </div>
        <div
          style={{
            fontSize: "10pt",
            fontWeight: "bold",
            fontStyle: "normal",
            color: "#fff",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
          }}
        >
          Create a Text Story
        </div>
      </div>
    </i>
  );
};

//Photoblack
const PhotoBlack = ({ style }) => {
  return (
    <div style={{ ...style }}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/yRHy04YOWar.png)",
          backgroundPosition: "0px -1054px",
          backgroundSize: "auto",
          width: "20px",
          height: "20px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
        }}
      ></i>
    </div>
  );
};

//PinionIcon
const PinionIcon = ({ className, style }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "36px",
        height: "36px",
        backgroundColor: "#e4e6eb",
        borderRadius: "25px",
        ...style,
      }}
    >
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/PY-g4A8Jqtq.png)",
          backgroundPosition: "0px -305px",
          backgroundSize: "0px -305px",
          width: "20px",
          height: "20px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
        }}
      ></i>
    </div>
  );
};

//Xlarge icon
const XIconLarge = ({ style, styleX, className, onClick, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      onClick={onClick}
      className={`${className} ${classes.xIconLarge}`}
      style={{
        display: "inline-block",
        ...style,
      }}
    >
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/zzcONqkA930.png)",
          backgroundPosition: "-126px -107px",
          backgroundSize: "auto",
          width: "20px",
          height: "20px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          filter: "brightness(0) invert(1)",
          ...styleX,
        }}
      ></i>
    </label>
  );
};

//plus icon
const PlusIcon = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      width="1em"
      height="1em"
      className={`${classes.svg} ${className}`}
      style={{ ...style }}
    >
      <g fillRule="evenodd" transform="translate(-446 -350)">
        <g fillRule="nonzero">
          <path
            d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
            transform="translate(354.5 159.5)"
          ></path>
          <path
            d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
            transform="translate(354.5 159.5)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

//xemthem Icon
const XemThêmIcon = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      className={className}
      style={{ ...style }}
    >
      <g fillRule="evenodd" transform="translate(-448 -544)">
        <path
          fillRule="nonzero"
          d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
        ></path>
      </g>
    </svg>
  );
};

//dotIcon
const DotIcon = ({ className, style }) => {
  return (
    <div
      style={{
        height: "7px",
        width: "7px",
        borderRadius: "50%",
        backgroundColor: "black",
        ...style,
      }}
      className={className}
    ></div>
  );
};

//X Icon
const DeleteIcon = ({ className, style, onClick }) => {
  return (
    <div
      aria-label="Xóa nội dung tìm kiếm mới đây"
      role="button"
      className={`${classes.deleteIcon} ${className}`}
      style={style}
      onClick={onClick}
    >
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage: `url(${iconPureFB})`,
          backgroundPosition: "-125px -71px",
          backgroundSize: "auto",
          width: "12px",
          height: "12px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
        }}
      ></i>
      <div data-visualcompletion="ignore" style={{ inset: "-8px" }}></div>
    </div>
  );
};

//Logo FB
const LogoFacebook = ({ className }) => {
  return (
    <svg viewBox="0 0 36 36" fill="url(#jsc_s_4)" height="40" width="40">
      <defs>
        <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_4">
          <stop offset="0%" stopColor="#0062E0"></stop>
          <stop offset="100%" stopColor="#19AFFF"></stop>
        </linearGradient>
      </defs>
      <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
      <path
        fill="white"
        d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
      ></path>
    </svg>
  );
};

//SearchIcon
const SearchIcon = ({ style, className }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      className={`${classes.svg} ${className}`}
      style={style}
    >
      <g fillRule="evenodd" transform="translate(-448 -544)">
        <g fillRule="nonzero">
          <path
            d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
            transform="translate(448 544)"
          ></path>
          <path
            d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
            transform="translate(448 544)"
          ></path>
          <path
            d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
            transform="translate(448 544)"
          ></path>
          <path
            d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
            transform="translate(448 544)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

//HomeIcon
const HomeIcon = ({ style }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      className={classes.svg}
      height="28"
      width="28"
      style={style}
    >
      <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path>
    </svg>
  );
};

const HomeIconOutline = ({ style }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      className={classes.svg}
      height="28"
      width="28"
      style={style}
    >
      <path d="M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z"></path>
    </svg>
  );
};

//FriendsIcon
const FriendsIcon = ({ style }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      className={classes.svg}
      height="28"
      width="28"
      style={style}
    >
      <path d="M20.34 22.428c.077-.455.16-1.181.16-2.18 0-1.998-.84-3.981-2.12-5.41-.292-.326-.077-.838.36-.838h2.205C24.284 14 27 16.91 27 20.489c0 1.385-1.066 2.51-2.378 2.51h-3.786a.496.496 0 01-.495-.571zM20 13c-1.93 0-3.5-1.794-3.5-4 0-2.467 1.341-4 3.5-4s3.5 1.533 3.5 4c0 2.206-1.57 4-3.5 4zm-9.5-1c-2.206 0-4-2.019-4-4.5 0-2.818 1.495-4.5 4-4.5s4 1.682 4 4.5c0 2.481-1.794 4.5-4 4.5zm2.251 2A6.256 6.256 0 0119 20.249v1.313A2.44 2.44 0 0116.563 24H4.438A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.249 14h4.502z"></path>
    </svg>
  );
};

const FriendsIconOutline = ({ style }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      className={classes.svg}
      height="28"
      width="28"
      style={style}
    >
      <path d="M10.5 4.5c-2.272 0-2.75 1.768-2.75 3.25C7.75 9.542 8.983 11 10.5 11s2.75-1.458 2.75-3.25c0-1.482-.478-3.25-2.75-3.25zm0 8c-2.344 0-4.25-2.131-4.25-4.75C6.25 4.776 7.839 3 10.5 3s4.25 1.776 4.25 4.75c0 2.619-1.906 4.75-4.25 4.75zm9.5-6c-1.41 0-2.125.841-2.125 2.5 0 1.378.953 2.5 2.125 2.5 1.172 0 2.125-1.122 2.125-2.5 0-1.659-.715-2.5-2.125-2.5zm0 6.5c-1.999 0-3.625-1.794-3.625-4 0-2.467 1.389-4 3.625-4 2.236 0 3.625 1.533 3.625 4 0 2.206-1.626 4-3.625 4zm4.622 8a.887.887 0 00.878-.894c0-2.54-2.043-4.606-4.555-4.606h-1.86c-.643 0-1.265.148-1.844.413a6.226 6.226 0 011.76 4.336V21h5.621zm-7.122.562v-1.313a4.755 4.755 0 00-4.749-4.749H8.25A4.755 4.755 0 003.5 20.249v1.313c0 .518.421.938.937.938h12.125c.517 0 .938-.42.938-.938zM20.945 14C24.285 14 27 16.739 27 20.106a2.388 2.388 0 01-2.378 2.394h-5.81a2.44 2.44 0 01-2.25 1.5H4.437A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.25 14h4.501a6.2 6.2 0 013.218.902A5.932 5.932 0 0119.084 14h1.861z"></path>
    </svg>
  );
};
//WatchIcon
const WatchIcon = ({ style }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      className={classes.svg}
      height="28"
      width="28"
      style={style}
    >
      <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"></path>
    </svg>
  );
};

const WatchIconOutline = ({ style }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      className={classes.svg}
      height="28"
      width="28"
      style={style}
    >
      <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path>
    </svg>
  );
};

//GroupIcon
const GroupIcon = ({ style }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      className={classes.svg}
      height="28"
      width="28"
      style={style}
    >
      <path d="M21.877 19 21.364 19C21.139 19 20.971 18.802 20.996 18.577 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.066 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.877 19ZM17.75 10.75C17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13 18.647 13 17.75 11.991 17.75 10.75ZM19.5 18.221C19.5 19.202 18.682 20 17.678 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.442 13.5 12.828 13.5L15.173 13.5C17.559 13.5 19.5 15.395 19.5 17.724L19.5 18.221ZM6.25 10.75C6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13 7.147 13 6.25 11.991 6.25 10.75ZM7.934 14.591C7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.991 18.461 7.004 18.577 7.03 18.802 6.861 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14L7.631 14C7.933 14 8.102 14.338 7.934 14.591ZM14 6C15.697 6 16.75 7.15 16.75 9 16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6ZM14 1C6.832 1 1 6.832 1 14 1 21.169 6.832 27 14 27 21.169 27 27 21.169 27 14 27 6.832 21.169 1 14 1Z"></path>
    </svg>
  );
};

const GroupIconOutline = ({ style }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      className={classes.svg}
      height="28"
      width="28"
      style={style}
    >
      <path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path>
    </svg>
  );
};

//GameIcon
const GameIcon = ({ style }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      className={classes.svg}
      height="28"
      width="28"
      style={style}
    >
      <path d="M10.25 18.5h6.25a.5.5 0 01.5.5v5.5a.5.5 0 01-.5.5H4.25C3.56 25 3 24.44 3 23.75V4.25C3 3.56 3.56 3 4.25 3h19.5c.69 0 1.25.56 1.25 1.25V9a.5.5 0 01-.5.5H10.25a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75zM11.5 17a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v12.25c0 .69-.56 1.25-1.25 1.25H19a.5.5 0 01-.5-.5v-6.75a.75.75 0 00-.75-.75H11.5z"></path>
    </svg>
  );
};

const GameIconOutline = ({ style }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      className={classes.svg}
      height="28"
      width="28"
      style={style}
    >
      <path d="M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z"></path>
    </svg>
  );
};

//anotherIcon
const AnotherIcon = () => {
  return (
    <svg viewBox="0 0 28 28" className={classes.svg} height="28" width="28">
      <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
    </svg>
  );
};

//IconRight

//settingIcon
const MenuIcon = ({ style }) => {
  return (
    <svg viewBox="0 0 44 44" style={style}>
      <circle cx="7" cy="7" r="6"></circle>
      <circle cx="22" cy="7" r="6"></circle>
      <circle cx="37" cy="7" r="6"></circle>
      <circle cx="7" cy="22" r="6"></circle>
      <circle cx="22" cy="22" r="6"></circle>
      <circle cx="37" cy="22" r="6"></circle>
      <circle cx="7" cy="37" r="6"></circle>
      <circle cx="22" cy="37" r="6"></circle>
      <circle cx="37" cy="37" r="6"></circle>
    </svg>
  );
};

//MessengerIcon
const MessengerIcon = ({ style }) => {
  return (
    <svg viewBox="0 0 28 28" alt="MessengerIcon" style={style}>
      <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
    </svg>
  );
};

//AnnounceIcon
const AnnounceIcon = ({ style }) => {
  return (
    <svg viewBox="0 0 28 28" alt="" style={style}>
      <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
    </svg>
  );
};

//AccountIcon
const AccountIcon = ({ style, className, onClick }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      style={style}
      className={className}
      onClick={onClick}
    >
      <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
    </svg>
  );
};

export {
  SearchIcon,
  HomeIcon,
  HomeIconOutline,
  FriendsIcon,
  FriendsIconOutline,
  WatchIcon,
  WatchIconOutline,
  GroupIcon,
  GroupIconOutline,
  GameIcon,
  GameIconOutline,
  AnotherIcon,
  MenuIcon,
  MessengerIcon,
  AnnounceIcon,
  AccountIcon,
  LogoFacebook,
  DeleteIcon,
  DotIcon,
  XemThêmIcon,
  PlusIcon,
  XIconLarge,
  PinionIcon,
  CreateATextStory,
  CreateAPhotoStory,
  LiveVideoIcon,
  PhotoPostIcon,
  FellingPostIcon,
  CheckInIcon,
  TagPeopleIcon,
  ThreeDotIcon,
  WordSmallIcon,
  LoveIcon,
  LikeIcon,
  LikeActiveIcon,
  CommentActiveIcon,
  ShareActiveIcon,
  ClickedLikeIcon,
  SmileSmallIcon,
  GifSmallIcon,
  StickerSmallIcon,
  AddMoreImgIcon,
  RoomVideoIcon,
  SearchContactsIcon,
  ThreeDotContactsIcon,
  VideoFromMessengerIcon,
  XFromMessengerIcon,
  GạchNgangFromMessengerIcon,
  PhoneFromMessengerIcon,
  PlusfromMessenger,
  GifFromMessenger,
  StickerFromMessenger,
  ImageFromMessenger,
  LikeFromMessenger,
  SmileIconFromMessenger,
  EnterFromMessenger,
  WriteNewMess,
};
