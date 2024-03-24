import Proptypes from "prop-types";

import CRUDButton from "../../components/CRUDButton/CRUDButton";
import styles from "./IdeosPage.module.css";

const { mainDiv, pageHeader, pageHeading, noIdeos } = styles;

const BlankScreen = () => {
  return <div className={noIdeos}>NOIDEOS</div>;
};

const IdeosScreen = () => {
  return <div className={noIdeos}>IDEOS</div>;
};

const IdeosPage = ({ data }) => {
  return (
    <div className="pageContainer">
      <div className={mainDiv}>
        <div className={pageHeader}>
          <p className={pageHeading}>
            Save your thoughts <span>✏️</span>
          </p>
          <img className="icon" src="/icons/categories.png" alt="categories" />
        </div>
        {data ? <IdeosScreen /> : <BlankScreen />}
      </div>
      <CRUDButton
        text={"ADD IDEOS"}
        action={() => {
          alert("Add Ideos!");
        }}
      />
    </div>
  );
};

IdeosPage.propTypes = {
  data: Proptypes.bool,
};

export default IdeosPage;