import _ from "./Sponsored.module.css";
import SponsoredItem from "./SponsoredItem/SponsoredItem";
import EloquentJavaScript from "../../../../../img/EloquentJavaScript.jpg";

function Sponsored() {
  return (
    <div className={_.sponsored}>
      <div className={_.sponsored_title}>Sponsored</div>
      <SponsoredItem
        picture={EloquentJavaScript}
        title="Vocabulary of Eloquent Javascript"
        domain="vocabularyeloquentjs.edu"
        href="https://heroku-vocabularyapp-wedsite.herokuapp.com/"
      />
    </div>
  );
}

export default Sponsored;
