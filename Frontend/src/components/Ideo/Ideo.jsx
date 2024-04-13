import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Ideo.module.css";
import axios from "axios";

const {
  ideoDiv,
  ideoTags,
  ideoTag,
  ideoContent,
  ideoTitle,
  ideoDescription,
  ideoMetaData,
  ideoDate,
  ideoIcons,
  ideoPinIcon,
  dropDownMenu,
  dropDownMenuList,
  dropDownMenuListItem,
  dropDownAnimation,
  dropDownCloseAnimation,
} = styles;

import FormLoading from "../FormLoading/FormLoading";

const Ideo = ({ ideo }) => {
  const [loading, setLoading] = useState(false);

  const colorScheme = {
    backgroundColor:
      ideo.ideosPriority === "High"
        ? "var(--accentColor)"
        : ideo.ideosPriority === "Medium"
        ? "var(--mediumAccentColor)"
        : "var(--lowAccentColor)",
    color:
      ideo.ideosPriority === "High" ? "var(--darkText)" : "var(--lightText)",
    iconFilter: ideo.ideosPriority === "Medium" ? "invert(1)" : "invert(0)",
  };

  const [dropDownVisible, setDropDownVisible] = useState(false);

  const showDropDown = () => {
    if (!dropDownVisible) {
      const dropDownMenu = document.getElementById("dropDownMenu" + ideo._id);
      dropDownMenu.style.display = "block";
      dropDownMenu.classList.remove(dropDownCloseAnimation);
      dropDownMenu.classList.add(dropDownAnimation);
      setDropDownVisible(true);
    }
  };

  const hideDropDown = () => {
    if (dropDownVisible) {
      const dropDownMenu = document.getElementById("dropDownMenu" + ideo._id);
      dropDownMenu.classList.remove(dropDownAnimation);
      dropDownMenu.classList.add(dropDownCloseAnimation);
      setTimeout(() => {
        dropDownMenu.style.display = "none";
        setDropDownVisible(false);
      }, 200);
    }
  };

  const showdDropDownMenu = () => {
    if (dropDownVisible) {
      hideDropDown();
    } else {
      showDropDown();
    }
  };

  const deleteIdeos = () => {
    setLoading(true);
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/ideos/${ideo._id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className={ideoDiv}
      id={ideo._id}
      style={{
        backgroundColor: colorScheme.backgroundColor,
        color: colorScheme.color,
      }}
      onClick={() => hideDropDown()}
    >
      {loading && (
        // <div className={loadingDiv}>
        <FormLoading />
        // </div>
      )}
      <div className={ideoTags}>
        <div className={ideoTag}>{ideo.ideosPriority}</div>
        <div className={ideoTag}>{ideo.ideosCategory}</div>
      </div>
      <div className={ideoContent}>
        <h1 className={ideoTitle}>{ideo.ideosTitle}</h1>
        <div className={ideoDescription}>{ideo.ideosDescription}</div>
      </div>
      <div className={ideoMetaData}>
        <div className={ideoDate}>
          <img
            className={ideoIcons}
            src="/icons/calendar.png"
            alt="calendar"
            style={{ filter: colorScheme.iconFilter }}
          />
          {new Date(ideo.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "2-digit",
          })}
        </div>
      </div>

      <img
        className={ideoPinIcon}
        src="/icons/three-dots.png"
        alt="three-dots"
        onClick={showdDropDownMenu}
        style={{ filter: colorScheme.iconFilter }}
      />

      <div className={dropDownMenu} id={"dropDownMenu" + ideo._id}>
        <ul className={dropDownMenuList}>
          <li className={dropDownMenuListItem}>Edit</li>
          <li className={dropDownMenuListItem}>Pin</li>
          <li
            className={dropDownMenuListItem}
            style={{ color: "red" }}
            onClick={deleteIdeos}
          >
            Delete
          </li>
        </ul>
      </div>
    </div>
  );
};

Ideo.propTypes = {
  ideo: PropTypes.object.isRequired,
};

export default Ideo;
