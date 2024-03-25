import styles from "./SettingsPage.module.css";

import Header from "../../components/Header/Header";

const { mainDiv } = styles;

const SettingsPage = () => {
  return (
    <div className="pageContainer">
      <Header />
      <div className={mainDiv}>
        <h4>Settings</h4>
      </div>
    </div>
  );
};

export default SettingsPage;
