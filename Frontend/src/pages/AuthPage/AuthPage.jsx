import { useEffect } from "react";
import styles from "./AuthPage.module.css";

const {
  mainDiv,
  logoText,
  hiddenLogoText,
  logoScreen,
  logoTextAnimation,
  hiddenLogoTextAnimation,
  transformedLogoText,
  transformedHiddenLogoText,
} = styles;

const initialLoadAnimation = () => {
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
};

// const LoginPage = () => {
//   return (
//     <div className="fullWidthContainer">
//       <div className={mainDiv}>
//         <h1 className={logoText}>LOGIN</h1>
//       </div>
//     </div>
//   );
// };

const AuthPage = () => {
  useEffect(() => {
    setTimeout(() => {
      initialLoadAnimation();
    }, 2000);
  }, []);

  return (
    <div className="fullWidthContainer">
      <div className={mainDiv} onClick={initialLoadAnimation}>
        <div className={logoScreen}>
          <h1 className={logoText} id="authInitialLogo">
            IDEOS
          </h1>
          <h1 className={hiddenLogoText} id="authInitialHiddenLogo">
            IDEOS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
