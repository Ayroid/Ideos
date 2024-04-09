import { useState } from "react";
import Proptypes from "prop-types";

import Header from "../../components/Header/Header";

import CRUDButton from "../../components/CRUDButton/CRUDButton";
import styles from "./IdeosPage.module.css";
import AddIdeos from "../../sections/AddIdeos/AddIdeos";

const { mainDiv, pageHeader, pageHeading, noIdeos } = styles;

const BlankScreen = () => {
  return <div className={noIdeos}>NOIDEOS</div>;
};

const IdeosScreen = () => {
  return <div className={noIdeos}>IDEOS</div>;
};

const IdeosPage = ({ data }) => {
  // SHOW ADD IDEOS SECTION STATE
  const [showAddIdeos, setShowAddIdeos] = useState(false);

  // UPDATER FUNCTIONS

  const showAddIdeosComp = () => {
    setShowAddIdeos(true);
  };

  const hideAddIdeosComp = () => {
    setShowAddIdeos(false);
  };

  return (
    <div className="pageContainer">
      <Header />
      <AddIdeos showAddIdeos={showAddIdeos} hideAddIdeos={hideAddIdeosComp} />
      <div className={mainDiv}>
        <div className={pageHeader}>
          <p className={pageHeading}>
            Save your thoughts <span>✏️</span>
          </p>
          <img className="icon" src="/icons/categories.png" alt="categories" />
        </div>
        {data ? <IdeosScreen /> : <BlankScreen />}
      </div>
      <CRUDButton text={"ADD IDEOS"} action={showAddIdeosComp} />
    </div>
  );
};

IdeosPage.propTypes = {
  data: Proptypes.bool,
};

export default IdeosPage;
