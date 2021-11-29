import { Fragment } from "react";
import { LikeIcon, LoveIcon } from "../../../../../../../icons/iconsFacebook";
import _ from "./LikeLoveIcon.module.css";

const LikeLoveIcon = ({ isLike, isLove, isFirstLove }) => {
  //Return JSX
  if (isFirstLove) {
    return (
      <Fragment>
        {isLove && (
          <LoveIcon
            className={_.post_bottom_displayShareLike_like_icon}
            style={{ zIndex: "1" }}
          />
        )}
        {isLike && (
          <LikeIcon
            className={_.post_bottom_displayShareLike_like_icon}
            style={{ position: "absolute", left: "15px" }}
          />
        )}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        {isLike && (
          <LikeIcon
            className={_.post_bottom_displayShareLike_like_icon}
            style={{ zIndex: "1" }}
          />
        )}
        {isLove && (
          <LoveIcon
            className={_.post_bottom_displayShareLike_like_icon}
            style={{ position: "absolute", left: "15px" }}
          />
        )}
      </Fragment>
    );
  }
};

export default LikeLoveIcon;
