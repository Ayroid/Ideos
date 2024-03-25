import { Link } from "react-router-dom";
import styles from "./Header.module.css";

// REDUX IMPORT
import { useDispatch, useSelector } from "react-redux";
import { updateNavigation } from "../../redux/slices/activeNavigation";

const { mainDiv, navLinkDiv, logo, icons } = styles;

const Header = () => {
  const activeNavigationState = useSelector(
    (state) => state.activeNavigation.value
  );

  const dispatch = useDispatch();

  return (
    <div className={mainDiv}>
      <h2 className={logo}>IDEOS</h2>
      <div className={icons}>
        <Link
          to={"/search"}
          className={navLinkDiv}
          onClick={() => dispatch(updateNavigation("search"))}
        >
          <img className={"icon"} src={"/icons/search.png"} alt={"search"} />
        </Link>
        <Link
          to={"/settings"}
          className={navLinkDiv}
          onClick={() => dispatch(updateNavigation("settings"))}
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

export default Header;
