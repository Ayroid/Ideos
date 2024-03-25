import styles from "./HomePage.module.css";

import Header from "../../components/Header/Header";

const { mainDiv } = styles;

const HomePage = () => {
  return (
    <div className="pageContainer">
      <Header />
      <div className={mainDiv}>
        <h4>Home</h4>
      </div>
    </div>
  );
};

export default HomePage;
