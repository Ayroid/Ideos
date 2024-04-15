import styles from "./SettingsPage.module.css";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

const { mainDiv } = styles;

const SettingsPage = () => {
  return (
    <div className="pageContainer">
      <Header />
      <div className={mainDiv}>
        <h4>Settings</h4>
      </div>
      <Navigation />
    </div>
  );
};

export default SettingsPage;
