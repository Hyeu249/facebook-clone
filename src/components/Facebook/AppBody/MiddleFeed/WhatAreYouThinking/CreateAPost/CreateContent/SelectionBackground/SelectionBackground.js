import React from "react";
import __ from "./SelectionBackground.module.css";
import Background from "./Background/Background";
import { XemThêmIcon } from "../../../../../../../../icons/iconsFacebook";
import postBG_2 from "../../../../../../../../img/postBG_2.jpg";
import postBG_3 from "../../../../../../../../img/postBG_3.jpg";
import postBG_4 from "../../../../../../../../img/postBG_4.jpg";
import postBG_5 from "../../../../../../../../img/postBG_5.jpg";
import postBG_6 from "../../../../../../../../img/postBG_6.jpg";
import postBG_7 from "../../../../../../../../img/postBG_7.jpg";
import postBG_8 from "../../../../../../../../img/postBG_8.jpg";
import postBG_9 from "../../../../../../../../img/postBG_9.jpg";
import postBG_10 from "../../../../../../../../img/postBG_10.jpg";

function SelectionBackground({
  setChoseABackground,
  background,
  setBackground,
}) {
  //array background
  const arrayBackground = [
    { id: __.bOne, image: false, bG: "#f0f2f5", defaultChecked: "true" },
    {
      id: __.bTwo,
      image: postBG_2,
      defaultChecked: background === postBG_2 && true,
    },
    {
      id: __.bThree,
      image: postBG_3,
      defaultChecked: background === postBG_3 && true,
    },
    {
      id: __.bFour,
      image: postBG_4,
      defaultChecked: background === postBG_4 && true,
    },
    {
      id: __.bFive,
      image: postBG_5,
      defaultChecked: background === postBG_5 && true,
    },
    {
      id: __.bSix,
      image: postBG_6,
      defaultChecked: background === postBG_6 && true,
    },
    {
      id: __.bSeven,
      image: postBG_7,
      defaultChecked: background === postBG_7 && true,
    },
    {
      id: __.bEight,
      image: postBG_8,
      defaultChecked: background === postBG_8 && true,
    },
    {
      id: __.bNine,
      image: postBG_9,
      defaultChecked: background === postBG_9 && true,
    },
    {
      id: __.bTen,
      image: postBG_10,
      defaultChecked: background === postBG_10 && true,
    },
  ];

  //Return JSX
  return (
    <div className={__.backgroundFrame}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "3px solid #fff",
          boxShadow: "var(--shadown)",
        }}
        className={__.background}
        onClick={() => setChoseABackground(false)}
      >
        <XemThêmIcon style={{ transform: "rotate(90deg)" }} />
      </div>
      {arrayBackground.map(({ id, image, bG, defaultChecked }) => (
        <Background
          key={id}
          id={id}
          image={image}
          bG={bG}
          className={__.background}
          defaultChecked={defaultChecked}
          onClick={() => setBackground(image)}
        />
      ))}
    </div>
  );
}

export default SelectionBackground;
