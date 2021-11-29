import { useState, useEffect } from "react";
import db, { ref, onValue } from "../../../../firebase";
import Post from "./Post/Post";
import Story from "./Story/Story";
import WhatAreYouThinking from "./WhatAreYouThinking/WhatAreYouThinking";
import _ from "./MiddleFeed.module.css";

function MiddleFeed({ userFacebook }) {
  //state
  const [aPost, setAPost] = useState([]);

  //useEffect
  useEffect(() => {
    const postsDocumentFirebase = ref(db, "posts");
    onValue(postsDocumentFirebase, (snapshot) => {
      if (snapshot.val() === null) return;
      let posts = [];
      const lengthPosts = Object.values(snapshot.val()).length;
      for (let i = lengthPosts; i > 0; i--) {
        posts.push(Object.values(snapshot.val())[i - 1]);
      }
      setAPost(posts);
    });
  }, [setAPost]);

  //Return JSX
  return (
    <div className="grid">
      <div className="row justify_center">
        <div className={_.columnStory}>
          <Story userFacebook={userFacebook} />
        </div>
        <div className={_.columnNewFeed}>
          <WhatAreYouThinking aPost={aPost} userFacebook={userFacebook} />
          {aPost.length > 0 &&
            aPost.map((data) => (
              <Post
                key={data.idPath}
                aPost={data}
                userFacebook={userFacebook}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MiddleFeed;
