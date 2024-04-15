import styles from "./AnalyticsPage.module.css";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

const { mainDiv } = styles;

const AnalyticsPage = () => {
  return (
    <div className="pageContainer">
      <Header />
      <div className={mainDiv}>
        <h4>Analytics</h4>
      </div>
      <Navigation />
    </div>
  );
};

export default AnalyticsPage;
