import React, { Fragment, useEffect, useState } from "react";
import ReactDom from "react-dom";
import CreatingStory from "./CreatingStory/CreatingStory";
import CreatedStory from "./CreatedStory/CreatedStory";
import CreateStoryModal from "./CreateStoryModal/CreateStoryModal";

function Story({ userFacebook }) {
  //state
  const [isCreatedStory, setIsCreatedStory] = useState(false);
  const [userStory, setUserStory] = useState([]);

  //useEffect
  useEffect(() => {
    if (isCreatedStory.background) {
      setUserStory((state) => {
        return [...state, isCreatedStory];
      });
    }
  }, [isCreatedStory, setUserStory]);

  //Return JSX
  return (
    <Fragment>
      {isCreatedStory === false && (
        <CreatingStory setIsCreatedStory={setIsCreatedStory} />
      )}

      {isCreatedStory === true &&
        ReactDom.createPortal(
          <CreateStoryModal
            userFacebook={userFacebook}
            setIsCreatedStory={setIsCreatedStory}
            userStory={userStory}
          />,
          document.getElementById("modal-root")
        )}

      {userStory.length > 0 && (
        <CreatedStory
          userFacebook={userFacebook}
          userStory={userStory}
          setIsCreatedStory={setIsCreatedStory}
        />
      )}
    </Fragment>
  );
}

export default React.memo(Story);
