import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

// REDUX IMPORT
import { useDispatch, useSelector } from "react-redux";
import { updateNavigation } from "../../redux/slices/activeNavigation";

const { mainDiv, navLinkDiv } = styles;

const Navigation = () => {
  const activeNavigationState = useSelector(
    (state) => state.activeNavigation.value
  );

  const dispatch = useDispatch();

  const navLinks = [
    {
      title: "home",
      link: "/",
      blankIcon: "/icons/blank-home.png",
      filledIcon: "/icons/home.png",
    },
    {
      title: "apps",
      link: "/apps",
      blankIcon: "/icons/blank-apps.png",
      filledIcon: "/icons/apps.png",
    },
    {
      title: "analytics",
      link: "/analytics",
      blankIcon: "/icons/blank-analytics.png",
      filledIcon: "/icons/analytics.png",
    },
    {
      title: "notifications",
      link: "/notifications",
      blankIcon: "/icons/blank-notification.png",
      filledIcon: "/icons/notification.png",
    },
    {
      title: "ideos",
      link: "/ideos",
      blankIcon: "/icons/blank-light.png",
      filledIcon: "/icons/light.png",
    },
  ];

  return (
    <div className={mainDiv}>
      {navLinks.map((navLink) => (
        <Link
          key={navLink.title}
          to={navLink.link}
          className={navLinkDiv}
          onClick={() => dispatch(updateNavigation(navLink.title))}
        >
          <img
            className={"icon"}
            src={
              navLink.title === activeNavigationState
                ? navLink.filledIcon
                : navLink.blankIcon
            }
            alt={navLink.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
