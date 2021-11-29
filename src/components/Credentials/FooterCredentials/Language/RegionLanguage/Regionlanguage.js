import classes from "./RegionLanguage.module.css";

const RegionLanguage = (props) => {
  return (
    <li className={classes.main_list_Item}>
      <a
        href="https://httpstatuses.com/"
        className={classes.main_list_item_link}
      >
        {props.region}
      </a>
    </li>
  );
};

export default RegionLanguage;
