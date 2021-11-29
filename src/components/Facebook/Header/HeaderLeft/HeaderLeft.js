import { Fragment, useRef, useEffect, useState } from "react";
import ReactDom from "react-dom";
import HeaderModalSearch from "./HeaderModalSearch/HeaderModalSearch";
import { SearchIcon } from "../../../../icons/iconsFacebook";
import { LogoFacebook } from "../../../../icons/iconsFacebook";
import classes from "./HeaderLeft.module.css";

const HeaderLeft = ({ className }) => {
  //ref
  const ref = useRef();
  //state
  const [enteredSearch, setEnteredSearch] = useState();
  const [isUseSearch, setIsUserSearch] = useState(false);

  //destructoring
  const { header__left, grid_row_col, header__input, header__input_input } =
    className;

  //useEffect
  useEffect(() => {
    if (isUseSearch === true) ref.current.focus();
  }, [isUseSearch, enteredSearch]);

  //Return JSX
  return (
    <Fragment>
      <div className={`${grid_row_col} ${header__left}`}>
        {/* logo facebook area */}
        {isUseSearch ? (
          <div style={isUseSearch && { width: "20px", height: "40px" }}></div>
        ) : (
          <LogoFacebook />
        )}

        {/* input area(include search icon) */}
        <div className={`${header__input}`}>
          {/* {only work on mobile & tablet (just search icon)} */}
          <div
            className={
              isUseSearch
                ? "none"
                : classes.circleSearch__left__for__mobileTablet
            }
            onClick={() => {
              setIsUserSearch(true);
            }}
          >
            <SearchIcon />
          </div>

          {/* {only work on pc (include input & search icon)} */}
          {(!isUseSearch || isUseSearch === "modal") && (
            <SearchIcon
              className={`${classes.searchIcon__left} ${classes.onlyPc}`}
            />
          )}
          {/* input Search */}
          <div
            style={{ position: "relative" }}
            className={isUseSearch ? "" : classes.onlyPc}
          >
            <input
              id="searchHeaderLeft"
              ref={ref}
              type="text"
              placeholder="Search Facebook"
              className={`${header__input_input} ${
                isUseSearch === true && classes.header__input__onClick
              }`}
              onMouseDown={() => setIsUserSearch(true)}
              onChange={(e) => setEnteredSearch(e.target.value)}
              onBlur={() => {
                setIsUserSearch((state) => {
                  if (state === "modal") return "modal";
                  return false;
                });
                ref.current.value = "";
              }}
            />
          </div>
        </div>
      </div>

      {/* modal clicked search */}
      {ReactDom.createPortal(
        <HeaderModalSearch
          className={`${isUseSearch ? "" : "none"}`}
          setIsUserSearch={setIsUserSearch}
          _ref={ref}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default HeaderLeft;
