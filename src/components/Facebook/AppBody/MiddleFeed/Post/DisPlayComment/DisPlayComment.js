import { useState, useEffect } from "react";
import _ from "./DisPlayComment.module.css";
import { AccountIcon } from "../../../../../../icons/iconsFacebook";
import WriteAComment from "./WriteAComment/WriteAComment";
import Comment from "./Comment/Comment";
import db, { ref, update } from "../../../../../../firebase";
import avatarRegister from "../../../../../../img/avatarRegister.jpg";
import avatarIconLarge from "../../../../../../img/avatarIconLarge.png";

function DisPlayComment({ userFacebook, aPost }) {
  //destructoring
  const { comments: commentUser, id: idPost, idPath } = aPost;
  const { name: nameUser, _id, _avatar } = userFacebook;

  //  //useEffect
  useEffect(() => {
    const modifyComments = JSON.parse(commentUser).map((data) => {
      if (data[0] === nameUser + _id) {
        data[1]._avatar = _avatar;
      }
      return data;
    });
    const isNotTheSameAvatar = JSON.parse(commentUser)
      .filter((data) => data[0] === nameUser + _id)
      .filter((data) => !(data[1]._avatar === _avatar));

    if (isNotTheSameAvatar.length > 0) {
      update(ref(db, `posts/${idPath}`), {
        comments: JSON.stringify(modifyComments),
      });
    }
  }, [idPost, _id, idPath, nameUser, _avatar, commentUser]);

  //state
  const [moreComment, setMoreComment] = useState(false);

  let comments = [];
  const lengthComments = JSON.parse(commentUser).length;

  for (let i = lengthComments; i > 0; i--) {
    comments.push(JSON.parse(commentUser)[i - 1]);
  }

  //Return JSX
  return (
    <div className={_.post_bottom_displayComment}>
      <div className={`${_.post_bottom_displayComment_sortComment} active`}>
        <div>Oldest</div>
        <AccountIcon style={{ width: "16px" }} />
      </div>

      <WriteAComment aPost={aPost} userFacebook={userFacebook} />
      {comments.slice(0, moreComment ? comments.length : 3).map((data) => {
        const { id, name, _avatar, messenger } = data[1];
        //variable
        const avatarUser =
          _avatar === avatarRegister ? avatarIconLarge : _avatar;

        return (
          <Comment
            key={id}
            name={name}
            avatar={avatarUser}
            messenger={messenger}
          />
        );
      })}

      <div
        className={_.post_bottom_displayComment_viewMore}
        onClick={() => setMoreComment((state) => !state)}
      >
        {lengthComments > 3
          ? moreComment
            ? "View less comments"
            : "View more comments..."
          : ""}
      </div>
    </div>
  );
}

export default DisPlayComment;
