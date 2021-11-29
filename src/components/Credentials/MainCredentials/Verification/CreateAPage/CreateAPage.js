import classes from "./CreateAPage.module.css";

const CreateAPage = () => {
  return (
    <div className={classes.main}>
      <a
        href="https://www.facebook.com/pages/create/?ref_type=registration_form"
        className={classes.main_link}
      >
        Create a page
      </a>
      <p className={classes.main_paragraph}>
        for a celebrity, brand or business.
      </p>
    </div>
  );
};

export default CreateAPage;
