import styles from "./AuthPage.module.css";

const { mainDiv, logoText } = styles;

const AuthPage = () => {
  return (
    <div className="pageContainer">
      <div className={mainDiv}>
        <h1 className={logoText}>IDEOS</h1>
      </div>
    </div>
  );
};

export default AuthPage;
