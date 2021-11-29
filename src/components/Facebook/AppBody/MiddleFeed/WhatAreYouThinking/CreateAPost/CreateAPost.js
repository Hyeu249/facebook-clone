import React, { useEffect, useState } from "react";
import db, {
  ref,
  set,
  storage,
  sref,
  uploadString,
} from "../../../../../../firebase";
import __ from "./CreateAPost.module.css";
import CreateContent from "./CreateContent/CreateContent";
import OptionalPost from "./OptionalPost/OptionalPost";
import HeaderCreateAPost from "./HeaderCreateAPost/HeaderCreateAPost";

function CreateAPost({ aPost, avatar, name, setIsCreateAPost, id }) {
  //state
  const [enteredMessenger, setEnterdMessenger] = useState();
  const [background, setBackground] = useState(false);
  const [postedImageFile, setPostedImageFile] = useState(false);
  const [isPostImage, setIsPostImage] = useState(false);

  //useEffect
  useEffect(() => {}, []);

  //create a post
  const createAPost = async () => {
    const lengthPosts = aPost.length;
    try {
      set(ref(db, `posts/${lengthPosts + 1}${name}`), {
        id,
        idPath: lengthPosts + 1 + name,
        avatar,
        name,
        messenger: enteredMessenger || "",
        picture: background || postedImageFile.url || "",
        reactions: JSON.stringify([[]]),
        comments: JSON.stringify([]),
        timestamp: new Date().toLocaleString(),
      });

      if (postedImageFile) {
        const storageImage = sref(
          storage,
          `posts/${id}/${Math.random() + postedImageFile.nameFile}`
        );
        uploadString(storageImage, postedImageFile.url, "data_url");
      }

      setIsCreateAPost(false);
    } catch (e) {
      alert(e);
    }
  };
  //Return JSX
  return (
    <div className={__.createAPost_overlay}>
      <div className={__.createAPost}>
        <HeaderCreateAPost setIsCreateAPost={setIsCreateAPost} />
        <CreateContent
          avatar={avatar}
          name={name}
          enteredMessenger={enteredMessenger}
          setEnterdMessenger={setEnterdMessenger}
          background={background}
          setBackground={setBackground}
          isPostImage={isPostImage}
          postedImageFile={postedImageFile}
          setIsPostImage={setIsPostImage}
          setPostedImageFile={setPostedImageFile}
        />
        {/* additional */}
        <div className={__.createAPost_additional}>
          <div className={__.createAPost_additional_text}>Add to your post</div>
          <OptionalPost
            isPostImage={isPostImage}
            setIsPostImage={setIsPostImage}
            className={__.createAPost_additional_optional}
            background={background}
          />
        </div>
        {/* button */}
        <button
          className={__.createAPost_button}
          disabled={enteredMessenger || postedImageFile ? false : true}
          onClick={createAPost}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default CreateAPost;
