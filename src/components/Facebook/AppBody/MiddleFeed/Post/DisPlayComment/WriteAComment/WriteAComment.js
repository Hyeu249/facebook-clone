import { useState } from "react";
import {
  SmileSmallIcon,
  GifSmallIcon,
  StickerSmallIcon,
} from "../../../../../../../icons/iconsFacebook";
import avatarIconLarge from "../../../../../../../img/avatarIconLarge.png";
import db, { ref, update } from "../../../../../../../firebase";
import _ from "./WriteAComment.module.css";
import avatarRegister from "../../../../../../../img/avatarRegister.jpg";
import { v4 as uuidv4 } from "uuid";

function WriteAComment({ userFacebook, aPost }) {
  //destructoring
  const { _id, name, _avatar } = userFacebook;
  const { comments, idPath } = aPost;

  //variable
  const avatarUser = _avatar === avatarRegister ? avatarIconLarge : _avatar;

  //state
  const [valueInput, setValueInput] = useState("");

  //Return jsx
  return (
    <div className={_.post_bottom_displayComment_writing}>
      <img
        src={avatarUser}
        alt="avatar"
        className={_.post_bottom_displayComment_writing_avatar}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flex: "1",
        }}
      >
        <input
          value={valueInput}
          placeholder="Write a comment..."
          type="text"
          className={_.post_bottom_displayComment_writing_input}
          onKeyPress={(e) => {
            const isMessen = e.target.value.length > 0;
            if (!(e.key === "Enter" && isMessen)) return;

            update(ref(db, `posts/${idPath}`), {
              comments: JSON.stringify([
                ...JSON.parse(comments),
                [
                  `${name + _id}`,
                  {
                    id: uuidv4().replace(/-/g, "a"),
                    name,
                    _avatar,
                    messenger: e.target.value,
                  },
                ],
              ]),
            });

            setValueInput("");
          }}
          onChange={(e) => setValueInput(e.target.value)}
        />
        <div
          className="centerAbsolute"
          style={{ display: "flex", right: "10px" }}
        >
          <SmileSmallIcon className={`${_.iconWritingInput} active`} />
          <GifSmallIcon className={`${_.iconWritingInput} active`} />
          <StickerSmallIcon className={`${_.iconWritingInput} active`} />
        </div>
      </div>
    </div>
  );
}

export default WriteAComment;
