import styles from "./AppsPage.module.css";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

const { mainDiv } = styles;

const AppsPage = () => {
  return (
    <div className="pageContainer">
      <Header />
      <div className={mainDiv}>
        <h4>Apps</h4>
      </div>
      <Navigation />
    </div>
  );
};

export default AppsPage;
