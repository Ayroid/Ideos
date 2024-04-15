import { useState } from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

import CRUDButton from "../../components/CRUDButton/CRUDButton";
import styles from "./IdeosPage.module.css";
import AddIdeos from "../../sections/AddIdeos/AddIdeos";
import Loading from "../../components/Loading/Loading";

import useFetch from "../../hooks/useFetch";
import Ideo from "../../components/Ideo/Ideo";

const { ideosPageMainDiv, pageHeader, pageHeading, noIdeos } = styles;

const BlankScreen = () => {
  return <div className={noIdeos}>NOIDEOS</div>;
};

const IdeosScreen = ({ ideos }) => {
  return (
    <div className={noIdeos}>
      {ideos.map((ideo) => (
        <Ideo key={ideo._id} ideo={ideo} />
      ))}
    </div>
  );
};

const IdeosPage = () => {
  // SHOW ADD IDEOS SECTION STATE
  const [showAddIdeos, setShowAddIdeos] = useState(false);

  const { data, loading } = useFetch({
    url: `${import.meta.env.VITE_SERVER_URL}/ideos/`,
  });

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
      <div className={ideosPageMainDiv}>
        <div className={pageHeader}>
          <p className={pageHeading}>
            Save your thoughts <span></span>
          </p>
          <img className="icon" src="/icons/categories.png" alt="categories" />
        </div>
        {loading ? (
          <Loading />
        ) : data ? (
          <IdeosScreen ideos={data} />
        ) : (
          <BlankScreen />
        )}
      </div>
      <CRUDButton text={"ADD IDEOS"} action={showAddIdeosComp} />
      <Navigation />
    </div>
  );
};

IdeosScreen.propTypes = {
  ideos: PropTypes.array.isRequired,
};

export default IdeosPage;
