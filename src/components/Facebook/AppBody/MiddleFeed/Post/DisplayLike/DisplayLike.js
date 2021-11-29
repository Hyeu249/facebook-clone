import _ from "./DisplayLike.module.css";
import LikeLoveIcon from "./LikeLoveIcon/LikeLoveIcon";

function DisplayLike({ reactions }) {
  const data = JSON.parse(reactions);
  const totalReaction = data.reduce((total, likeLove) => {
    return total + (likeLove[1]?.like || 0) + (likeLove[1]?.love || 0);
  }, 0);

  const isLike = data.some((data) => data[1]?.like);
  const isLove = data.some((data) => data[1]?.love);

  const isFirstLoveArray = data?.filter(
    (data) => data[1]?.like || data[1]?.love
  )[0];
  const isFirstLove = isFirstLoveArray?.some((data) => data.love);

  //Return
  return (
    <div className={_.post_bottom_displayShareLike_like}>
      <LikeLoveIcon isLike={isLike} isLove={isLove} isFirstLove={isFirstLove} />
      <div
        className={`${_.post_bottom_displayShareLike_like_number}  ${
          isLike && isLove && _.marginLeft_20
        }`}
      >
        {totalReaction || ""}
      </div>
    </div>
  );
}

export default DisplayLike;
