import _ from "./SponsoredItem.module.css";

function SponsoredItem({ picture, title, domain, href }) {
  //Return JSX
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className={_.sponsored_item}
    >
      <img src={picture} alt="ads" className={_.sponsored_item_picture} />
      <div className={_.sponsored_item_describe}>
        <div
          style={{ fontSize: ".9375rem", fontWeight: "500", color: "black" }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: ".8125rem",
            fontWeight: "400",
            color: "#65676b",
          }}
        >
          {domain}
        </div>
      </div>
    </a>
  );
}

export default SponsoredItem;
