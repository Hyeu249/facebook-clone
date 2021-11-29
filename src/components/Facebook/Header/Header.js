import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";
import classes from "./Header.module.css";

function Header({ userFacebook }) {
  //Return JSX
  return (
    <div className="grid" style={{ zIndex: "1" }}>
      <div className={`row ${classes.header}`}>
        <HeaderLeft
          className={{
            header__left: classes.header__left,
            grid_row_col: "col l-4 m-3 c-3",
            header__input: classes.header__input,
            header__input_input: classes.header__input_input,
          }}
        />

        <HeaderMiddle
          classes={{
            header__middle: classes.header__middle,
            grid_row_col: "col l-4 m-5 c-1",
            header__option: classes.header__option,
            "header__option--flexGrow": classes["header__option--flexGrow"],
          }}
        />

        <HeaderRight
          userFacebook={userFacebook}
          classes={{
            header__right: classes.header__right,
            grid_row_col: "col l-4 m-4 c-8",
            header__option: classes.header__option,
          }}
        />
      </div>
    </div>
  );
}

export default Header;
