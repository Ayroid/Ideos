import styles from "./AppsPage.module.css";

import Header from "../../components/Header/Header";

const { mainDiv } = styles;

const AppsPage = () => {
  return (
    <div className="pageContainer">
      <Header />
      <div className={mainDiv}>
        <h4>Apps</h4>
      </div>
    </div>
  );
};

export default AppsPage;
