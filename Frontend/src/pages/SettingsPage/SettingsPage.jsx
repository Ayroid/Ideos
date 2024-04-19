import styles from "./SettingsPage.module.css";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import CRUDButton from "../../components/CRUDButton/CRUDButton";

import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { updateNavigation } from "../../redux/slices/activeNavigation";

const { mainDiv } = styles;

const SettingsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(updateNavigation("home"));
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
          style={{
            backgroundColor: "red",
            color: "white",
            width: "100%",
          }}
        />
      </div>
      <Navigation />
    </div>
  );
};

export default SettingsPage;
