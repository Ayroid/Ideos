import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./AuthPage.module.css";

import InputField from "../../components/InputField/InputField";
import CRUDButton from "../../components/CRUDButton/CRUDButton";

const {
  mainDiv,
  logoText,
  authMainDiv,
  authHeader,
  hiddenLogoText,
  logoScreen,
  logoTextAnimation,
  hiddenLogoTextAnimation,
  transformedLogoText,
  transformedHiddenLogoText,
  googleAuthButton,
  pageChangeButton,
  formSeparator,
} = styles;

const initialLoadAnimation = (setAnimation) => {
  const logoText = document.getElementById("authInitialLogo");
  const hiddenLogoText = document.getElementById("authInitialHiddenLogo");

  logoText.classList.add(logoTextAnimation);
  hiddenLogoText.classList.add(hiddenLogoTextAnimation);

  setTimeout(() => {
    logoText.classList.remove(logoTextAnimation);
    logoText.classList.add(transformedLogoText);
    hiddenLogoText.classList.add(transformedHiddenLogoText);
    hiddenLogoText.classList.remove(hiddenLogoTextAnimation);
  }, 1000);

  setTimeout(() => {
    setAnimation(false);
  }, 800);
};

const LoginPage = ({ animationOn, pageChanger }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (!animationOn) {
      const authMainDiv = document.getElementById("loginAuthDiv");
      authMainDiv.style.display = "flex";
    }
  }, [animationOn]);

  return (
    <div className={authMainDiv} id="loginAuthDiv">
      <h6 className={authHeader}>LOGIN</h6>
      <form>
        <InputField
          id="loginEmail"
          type="text"
          value={username}
          valueUpdater={handleUsernameChange}
          inputLabel="Username"
          placeholder="Ideos Username"
          required={true}
          bgColor={"var(--lightBg)"}
          color={"var(--darkText)"}
        />
        <InputField
          id="loginPassword"
          type="password"
          value={password}
          valueUpdater={handlePasswordChange}
          inputLabel="Password"
          placeholder="Ideos Password"
          required={true}
          bgColor={"var(--lightBg)"}
          color={"var(--darkText)"}
        />
        <CRUDButton type="submit" text="LOGIN" />
      </form>
      <p className={formSeparator}>Or</p>
      <div className={googleAuthButton}>
        <img src="/icons/google.png" alt="" />
      </div>
      <div className={pageChangeButton}>
        New to Ideos? <br /> <span onClick={pageChanger}>SignUp</span>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  animationOn: PropTypes.bool,
  pageChanger: PropTypes.func,
};

const SignUpPage = ({ animationOn, pageChanger }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (!animationOn) {
      const authMainDiv = document.getElementById("signUpAuthDiv");
      authMainDiv.style.display = "flex";
    }
  }, [animationOn]);

  return (
    <div className={authMainDiv} id="signUpAuthDiv">
      <h6 className={authHeader}>SIGN UP</h6>
      <form>
        <InputField
          id="loginEmail"
          type="text"
          value={username}
          valueUpdater={handleUsernameChange}
          inputLabel="Username"
          placeholder="Ideos Username"
          required={true}
          bgColor={"var(--lightBg)"}
          color={"var(--darkText)"}
        />

        <InputField
          id="loginEmail"
          type="email"
          value={email}
          valueUpdater={handleEmailChange}
          inputLabel="Email"
          placeholder="Personal Email"
          required={true}
          bgColor={"var(--lightBg)"}
          color={"var(--darkText)"}
        />

        <InputField
          id="loginPassword"
          type="password"
          value={password}
          valueUpdater={handlePasswordChange}
          inputLabel="Password"
          placeholder="Ideos Password"
          required={true}
          bgColor={"var(--lightBg)"}
          color={"var(--darkText)"}
        />
        <CRUDButton type="submit" text="SIGN UP" />
      </form>
      <p className={formSeparator}>Or</p>
      <div className={googleAuthButton}>
        <img src="/icons/google.png" alt="" />
      </div>
      <div className={pageChangeButton}>
        Already a User? <br /> <span onClick={pageChanger}>Login</span>
      </div>
    </div>
  );
};

SignUpPage.propTypes = {
  animationOn: PropTypes.bool,
  pageChanger: PropTypes.func,
};

const AuthPage = () => {
  const [authPage, setAuthPage] = useState("login");
  const [animationOn, setAnimationOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      initialLoadAnimation(setAnimationOn);
    }, 2000);
  }, []);

  return (
    <div className="fullWidthContainer">
      <div className={mainDiv}>
        <div className={logoScreen}>
          <h1 className={logoText} id="authInitialLogo">
            IDEOS
          </h1>
          {authPage === "login" ? (
            <LoginPage
              animationOn={animationOn}
              pageChanger={() => setAuthPage("signUp")}
            />
          ) : (
            <SignUpPage
              animationOn={animationOn}
              pageChanger={() => setAuthPage("login")}
            />
          )}
          <h1 className={hiddenLogoText} id="authInitialHiddenLogo">
            IDEOS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
