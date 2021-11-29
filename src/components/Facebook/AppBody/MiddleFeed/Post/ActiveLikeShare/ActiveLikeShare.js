import { useState, useEffect } from "react";
import db, { ref, update, onValue } from "../../../../../../firebase";
import _ from "./ActiveLikeShare.module.css";
import {
  LikeIcon,
  LoveIcon,
  LikeActiveIcon,
  CommentActiveIcon,
  ShareActiveIcon,
  ClickedLikeIcon,
} from "../../../../../../icons/iconsFacebook";

function ActiveLikeShare({ idPath, userFacebook, setAllowComment }) {
  //destructoring
  const idName = userFacebook.name + userFacebook._id;

  //state
  const [isLike, setIsLike] = useState(false);
  const [isLove, setIsLove] = useState(false);
  const [isReact, setIsReact] = useState();

  //read data
  useEffect(() => {
    const postsFirebase = ref(db, `posts/${idPath}`);
    onValue(postsFirebase, (snapshot) => {
      const data = JSON.parse(snapshot.val().reactions);
      setIsReact(data);

      const isTrue = data.filter((data) => {
        return data[0] === idName;
      });
      if (isTrue.length > 0) {
        const like = isTrue[0][1].like;
        const love = isTrue[0][1].love;

        setIsLike(like ? true : false);
        setIsLove(love ? true : false);
      }
    });
  }, [idPath, idName]);

  //update reactions
  const updateReaction = (firtReact, reaction) => {
    const isTrue = isReact.filter((data) => {
      return data[0] === idName;
    });

    if (isTrue.length > 0) {
      const noReactCurrent = isReact.filter((data) => {
        return !(data[0] === idName);
      });
      update(ref(db, `posts/${idPath}`), {
        reactions: JSON.stringify([...noReactCurrent, [`${idName}`, reaction]]),
      });
    } else {
      const reaction = isReact.filter((data) => typeof data[0] === "string");
      update(ref(db, `posts/${idPath}`), {
        reactions: JSON.stringify([...reaction, [`${idName}`, firtReact]]),
      });
    }
  };
  const updateLike = () => {
    updateReaction(
      { like: 1 },
      {
        like: isLike ? false : 1,
        love: false,
      }
    );
  };

  const updateLove = () => {
    updateReaction(
      { love: 1 },
      {
        like: false,
        love: isLove ? false : 1,
      }
    );
  };

  //Return
  return (
    <div className={_.post_bottom_activeLikeShare}>
      <div
        className={`${_.post_bottom_activeLikeShare_item} `}
        id={_.like}
        onClick={() => (isLove ? updateLove() : updateLike())}
      >
        {isLove && (
          <LoveIcon
            className={`${_.clicked}`}
            style={{ width: "18px", padding: "7px" }}
          />
        )}
        {isLike && !isLove && (
          <ClickedLikeIcon
            className={`${_.clicked}`}
            style={{ padding: "3px 7px 3px 3px" }}
          />
        )}
        {!isLike && !isLove && <LikeActiveIcon style={{ padding: "7px" }} />}
        {isLove ? "Love" : "Like"}
      </div>

      <div className={_.post_bottom_activeLikeShare_dropUp}>
        <LikeIcon className={_.likeIcon} onClick={() => updateLike()} />
        <LoveIcon className={_.loveIcon} onClick={() => updateLove()} />
      </div>

      <div
        className={_.post_bottom_activeLikeShare_item}
        onClick={() => setAllowComment((state) => !state)}
      >
        <CommentActiveIcon style={{ padding: "7px" }} />
        Comment
      </div>

      <div className={_.post_bottom_activeLikeShare_item}>
        <ShareActiveIcon style={{ padding: "7px" }} />
        Share
      </div>
    </div>
  );
}

export default ActiveLikeShare;
