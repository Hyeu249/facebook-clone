import { useState } from "react";
import { DeleteIcon } from "../../../../../../icons/iconsFacebook";
import classes from "./LastSearched.module.css";

const LastSearched = ({ avatarUser, nameUser }) => {
  //state
  const [isdelete, setIsDelete] = useState(false);

  //Return JSX
  return (
    !isdelete && (
      <div className={classes.lastSearchedItem}>
        {/* avatar & name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* img */}
          <img
            src={avatarUser}
            alt=""
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "25px",
            }}
          />
          {/* text name */}
          <div
            style={{
              maxWidth: "175px",
              padding: "0 6px",
              fontSize: ".9375rem",
              fontWeight: "400",
            }}
          >
            {nameUser}
          </div>
        </div>
        {/* X */}
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={() => setIsDelete(true)}
        />
      </div>
    )
  );
};

export default LastSearched;
