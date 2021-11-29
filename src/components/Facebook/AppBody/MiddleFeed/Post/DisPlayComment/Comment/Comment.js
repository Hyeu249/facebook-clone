import _ from "./Comment.module.css";

function Comment({ name, avatar, messenger }) {
  return (
    <div className={_.post_bottom_displayComment_comments}>
      <img
        src={avatar}
        alt="avatar"
        className={_.post_bottom_displayComment_comments_avatar}
      />
      <div className={_.post_bottom_displayComment_comments_right}>
        <div className={_.post_bottom_displayComment_comments_right_messen}>
          <div
            className={_.post_bottom_displayComment_comments_right_messen_name}
          >
            {name}
          </div>
          <div
            className={_.post_bottom_displayComment_comments_right_messen_text}
          >
            {messenger}
          </div>
        </div>

        <div
          className={_.post_bottom_displayComment_comments_right_likeComment}
        >
          <div
            className={
              _.post_bottom_displayComment_comments_right_likeComment_item
            }
          >
            Like
          </div>
          <div
            style={{ fontSize: "0.7rem", margin: "0 4px", userSelect: "none" }}
          >
            .
          </div>
          <div
            className={
              _.post_bottom_displayComment_comments_right_likeComment_item
            }
          >
            Reply
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
