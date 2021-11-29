import { useState } from "react";
import Select from "../../../../../../../../UI/Select/Select";
import { dates, months, years } from "./data";
import warningImg from "../../../../../../../../../img/warning.png";
import classes from "./Fields.module.css";

const Fields = (props) => {
  //state
  const [isBirthAllow, setIsBirthAllow] = useState("pending");

  //get year
  const currentYear = Number(new Date().getFullYear());

  //Return JXS
  return (
    <div className={classes.mainFields}>
      <Select
        name="day"
        id="fieldDay"
        ref={props._ref.ref_date}
        className={`${classes.birthSelection} ${isBirthAllow || "errorBorder"}`}
      >
        {dates.map((data) => (
          <option key={data.id} value={data.date}>
            {data.date}
          </option>
        ))}
      </Select>

      <Select
        name="month"
        id="fieldMonth"
        ref={props._ref.ref_month}
        className={`${classes.birthSelection} ${isBirthAllow || "errorBorder"}`}
      >
        {months.map((data) => (
          <option key={data.id} value={data.month}>
            {data.month}
          </option>
        ))}
      </Select>

      <Select
        name="year"
        id="fieldYear"
        ref={props._ref.ref_year}
        className={`${classes.birthSelection} ${isBirthAllow || "errorBorder"}`}
        onBlur={() =>
          setIsBirthAllow(
            currentYear - Number(props._ref?.ref_year?.current?.value) >= 13
          )
        }
      >
        {years.map((data) => (
          <option key={data.id} value={data.year}>
            {data.year}
          </option>
        ))}
      </Select>

      {(isBirthAllow && " ") || (
        <img
          src={warningImg}
          alt="warning"
          width="15px"
          className={classes.warningImg}
        />
      )}
      {(isBirthAllow && " ") || (
        <div className={classes.textErr}>
          It looks like you've entered the wrong info. Please make sure that you
          use your real date of birth
        </div>
      )}
      {(isBirthAllow && " ") || <div className={classes.arrowImg}></div>}
    </div>
  );
};

export default Fields;
