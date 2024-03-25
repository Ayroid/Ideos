import styles from "./AnalyticsPage.module.css";

import Header from "../../components/Header/Header";

const { mainDiv } = styles;

const AnalyticsPage = () => {
  return (
    <div className="pageContainer">
      <Header />
      <div className={mainDiv}>
        <h4>Analytics</h4>
      </div>
    </div>
  );
};

export default AnalyticsPage;
