import React, { useEffect, useRef, useState } from "react";
import classes from "./PartThree.module.css";
import { AccountIcon } from "../../../../../../../icons/iconsFacebook";
import CircleBackgroundItem from "./CircleBackgroundItem/CircleBackgroundItem";
import {
  circleBG_1_Img,
  circleBG_2_Img,
  circleBG_3_Img,
  circleBG_4_Img,
  circleBG_5_Img,
  circleBG_6_Img,
  circleBG_7_Img,
  circleBG_8_Img,
  circleBG_9_Img,
  circleBG_10_Img,
  circleBG_11_Img,
  circleBG_12_Img,
  circleBG_13_Img,
  circleBG_14_Img,
  circleBG_15_Img,
  circleBG_16_Img,
} from "../../../../../../../img/img";

function PartThree({
  enteredText,
  setEnteredText,
  setFontFamily,
  setBackgroundText,
}) {
  //array circle background items
  const backgroundData = [
    { id: classes.circleOne, image: circleBG_1_Img(), defaultChecked: "true" },
    { id: classes.circleTwo, image: circleBG_2_Img() },
    { id: classes.circleThree, image: circleBG_3_Img() },
    { id: classes.circleFour, image: circleBG_4_Img() },
    { id: classes.circleFive, image: circleBG_5_Img() },
    { id: classes.circleSix, image: circleBG_6_Img() },
    { id: classes.circleSeven, image: circleBG_7_Img() },
    { id: classes.circleEight, image: circleBG_8_Img() },
    { id: classes.circleNine, image: circleBG_9_Img() },
    { id: classes.circleTen, image: circleBG_10_Img() },
    { id: classes.circleEleven, image: circleBG_11_Img() },
    { id: classes.circleTwelve, image: circleBG_12_Img() },
    { id: classes.circleThirdTeen, image: circleBG_13_Img() },
    { id: classes.circleFourTeen, image: circleBG_14_Img() },
    { id: classes.circleFiftTeen, image: circleBG_15_Img() },
    { id: classes.circleSixTeen, image: circleBG_16_Img() },
  ];

  //state
  const [isExtendCircle, setIsExtendCircle] = useState(false);

  //ref
  const ref = useRef();

  //useEffect
  useEffect(() => {
    setFontFamily(ref.current.value);
  }, [setFontFamily]);

  //Return JSX
  return (
    <div className={classes.partThreeMain}>
      {/* text area */}
      <div className={classes.textareaFrame}>
        <textarea
          placeholder=""
          className={classes.typingArea}
          onChange={(e) => setEnteredText(e.target.value)}
        ></textarea>
        <label className={classes.textReadyType}>text</label>
        <label
          name={enteredText ? "" : "Start Typing"}
          className={classes.labelTyping}
        >
          {!enteredText && "Start Typing"}
        </label>
      </div>
      {/* font area */}
      <div style={{ width: "100%", position: "relative" }}>
        <label className={classes.selectFont_iconLeft}>Aa</label>
        <AccountIcon className={classes.selectFont_iconRight} />
        <select
          ref={ref}
          className={classes.selectFont}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="FacebookNarrowApp">Clean</option>
          <option value="FacebookSansApp">Simple</option>
          <option value="FacebookScriptAppLight">Casual</option>
          <option value="FacebookStencil">Fancy</option>
          <option value="FacebookSansAppHeavyItalic">Headline</option>
        </select>
      </div>
      {/* background area */}
      <div className={classes.backgroundArea}>
        <div className={classes.backgroundArea_textTop}>Backgrounds</div>
        <div className={classes.backgroundArea_circleFrame}>
          {/* circle background items */}
          {backgroundData
            .splice(0, isExtendCircle ? 16 : 8)
            .map(({ id, image, defaultChecked }) => (
              <CircleBackgroundItem
                key={id}
                id={id}
                image={image}
                defaultChecked={defaultChecked}
                setBackgroundText={setBackgroundText}
              />
            ))}
        </div>
        <div
          className={classes.backgroundArea_extendButton}
          onClick={() => setIsExtendCircle((state) => !state)}
        >
          <AccountIcon
            style={{
              width: "16px",
              padding: "12px 0",
              transform: isExtendCircle ? "rotate(180deg)" : "",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PartThree;
