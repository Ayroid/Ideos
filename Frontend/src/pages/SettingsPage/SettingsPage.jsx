import styles from "./SettingsPage.module.css";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import CRUDButton from "../../components/CRUDButton/CRUDButton";

import { toast } from "react-toastify";

const { mainDiv } = styles;

const SettingsPage = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    toast.success("Logged Out Successfully");
    navigate("/auth/login");
  };

  return (
    <div className="pageContainer">
      <Header />
      <div className={mainDiv}>
        <CRUDButton
          text="Log Out"
          action={logoutUser}
          color="white"
          backgroundColor="red"
        />
      </div>
      <Navigation />
    </div>
  );
};

export default SettingsPage;
