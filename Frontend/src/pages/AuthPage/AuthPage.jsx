import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./AuthPage.module.css";

import { useParams, useNavigate } from "react-router-dom";

import InputFieldAuth from "../../components/InputFieldAuth/InputFieldAuth";
import CRUDButton from "../../components/CRUDButton/CRUDButton";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { updateNavigation } from "../../redux/slices/activeNavigation";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

import {
  validateUsername,
  validateEmail,
  validatePassword,
} from "../../utils/validationMethods";

import axios from "axios";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const validateInputs = () => {
    return validateUsername(username) && validatePassword(password);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const data = {
      username,
      password,
    };

    axios
      .post(`${SERVER_URL}/user/login`, data)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        dispatch(updateNavigation("home"));
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 404) {
          toast.error("Account Does Not Exist");
          navigate("/auth/signup");
        }
        if (err.response.status === 401) {
          toast.error("Invalid Password");
        }
      });
  };

  return (
    <div className={authMainDiv} id="loginAuthDiv">
      <h6 className={authHeader}>LOGIN</h6>
      <form onSubmit={submitForm}>
        <InputFieldAuth
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
        <InputFieldAuth
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
        <CRUDButton
          type="submit"
          text="LOGIN"
          style={{
            backgroundColor: "var(--accentColor)",
            color: "var(--darkText)",
            width: "100%",
          }}
        />
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
  const navigate = useNavigate();

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

  const validateInputs = () => {
    return (
      validateUsername(username) &&
      validateEmail(email) &&
      validatePassword(password)
    );
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const data = {
      username,
      email,
      password,
    };

    axios
      .post(`${SERVER_URL}/user/signup`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Account Created Successfully");
        navigate("/auth/login");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          toast.error("Username or Email already exists");
          navigate("/auth/login");
        }
      });
  };

  return (
    <div className={authMainDiv} id="signUpAuthDiv">
      <h6 className={authHeader}>SIGN UP</h6>
      <form onSubmit={submitForm}>
        <InputFieldAuth
          id="signUpUsername"
          type="text"
          value={username}
          valueUpdater={handleUsernameChange}
          inputLabel="Username"
          placeholder="Ideos Username"
          required={true}
          bgColor={"var(--lightBg)"}
          color={"var(--darkText)"}
        />

        <InputFieldAuth
          id="signUpEmail"
          type="email"
          value={email}
          valueUpdater={handleEmailChange}
          inputLabel="Email"
          placeholder="Personal Email"
          required={true}
          bgColor={"var(--lightBg)"}
          color={"var(--darkText)"}
        />

        <InputFieldAuth
          id="signUpPassword"
          type="password"
          value={password}
          valueUpdater={handlePasswordChange}
          inputLabel="Password"
          placeholder="Ideos Password"
          required={true}
          bgColor={"var(--lightBg)"}
          color={"var(--darkText)"}
        />
        <CRUDButton
          type="submit"
          text="SIGN UP"
          style={{
            backgroundColor: "var(--accentColor)",
            color: "var(--darkText)",
            width: "100%",
          }}
        />
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
  const navigate = useNavigate();
  const { path } = useParams();
  const [authPage, setAuthPage] = useState(path || "login");
  const [animationOn, setAnimationOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      initialLoadAnimation(setAnimationOn);
    }, 1000);
  }, []);

  useEffect(() => {
    setAuthPage(path);
  }, [path]);

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
              pageChanger={() => navigate("/auth/signup")}
            />
          ) : (
            <SignUpPage
              animationOn={animationOn}
              pageChanger={() => navigate("/auth/login")}
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
