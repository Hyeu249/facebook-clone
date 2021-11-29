import RegionLanguage from "./RegionLanguage/Regionlanguage";
import region from "./regionArray";
import classes from "./Language.module.css";
import { Fragment } from "react";

const Language = () => {
  return (
    <Fragment>
      <ul className={classes.main_list}>
        {region.map((region) => (
          <RegionLanguage key={region.id} region={region.region} />
        ))}
        <button className={classes.button}>+</button>
      </ul>
    </Fragment>
  );
};

export default Language;
