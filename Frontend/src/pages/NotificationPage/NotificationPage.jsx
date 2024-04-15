import styles from "./NotificationPage.module.css";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

const { mainDiv } = styles;

const NotificationPage = () => {
  return (
    <div className="pageContainer">
      <Header />
      <div className={mainDiv}>
        <h4>Notification</h4>
      </div>
      <Navigation />
    </div>
  );
};

export default NotificationPage;
