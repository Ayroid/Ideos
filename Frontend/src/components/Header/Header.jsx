import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const { mainDiv, navLinkDiv, logo, icons } = styles;

const Header = ({ activeNavigationState, updateNavigation }) => {
  return (
    <div className={mainDiv}>
      <h2 className={logo}>IDEOS</h2>
      <div className={icons}>
        <Link
          to={"/search"}
          className={navLinkDiv}
          onClick={updateNavigation.bind(this, "search")}
        >
          <img className={"icon"} src={"/icons/search.png"} alt={"search"} />
        </Link>
        <Link
          to={"/settings"}
          className={navLinkDiv}
          onClick={updateNavigation.bind(this, "settings")}
        >
          <img
            className={"icon"}
            src={
              "settings" === activeNavigationState
                ? "/icons/settings.png"
                : "/icons/blank-settings.png"
            }
            alt={"settings"}
          />
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  activeNavigationState: PropTypes.string.isRequired,
  updateNavigation: PropTypes.func.isRequired,
};

export default Header;
