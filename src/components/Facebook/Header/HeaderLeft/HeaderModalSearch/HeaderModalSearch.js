import avatarUser from "../../../../../img/avatarIcon.png";
import LastSearched from "./LastSearched/LastSearched";

const HeaderModalSearch = ({ className, setIsUserSearch, _ref }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "320px",
        backgroundColor: "white",
        borderRadius: "0 0 10px 10px",
        boxShadow: "0px 1px 15px rgb(149 149 149)",
        zIndex: "1",
      }}
      className={className}
      onMouseDown={() => {
        setIsUserSearch("modal");
      }}
      tabIndex="0"
      onBlur={() => {
        setIsUserSearch((state) => {
          if (state === true) return true;
          return false;
        });
        _ref.current.value = "";
      }}
    >
      {/* thẻ giữ chổ */}
      <div style={{ width: "100%", height: "56px" }}></div>
      {/* thẻ tổng */}
      <div
        style={{
          padding: "0 8px 8px 8px",
        }}
      >
        <div
          style={{
            margin: "20px 0 8px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 6px",
          }}
        >
          <div style={{ fontSize: "1.0625rem", fontWeight: "550" }}>
            Recent searches
          </div>
          <a
            href="https://httpstatuses.com/"
            style={{
              fontSize: ".9375rem",
              fontWeight: "400",
              color: "#1877F2",
              textDecoration: "none",
            }}
          >
            Edit
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* items last searched */}
          <LastSearched avatarUser={avatarUser} nameUser="Bảo Trung" />
          <LastSearched avatarUser={avatarUser} nameUser="Bảo Hiếu" />
        </div>
      </div>
    </div>
  );
};

export default HeaderModalSearch;
