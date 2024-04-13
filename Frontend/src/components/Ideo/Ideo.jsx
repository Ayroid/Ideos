import PropTypes from "prop-types";
import styles from "./Ideo.module.css";

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
} = styles;

const Ideo = ({ ideo }) => {
  console.log(ideo);

  const colorScheme = {
    backgroundColor:
      ideo.ideosPriority === "High"
        ? "var(--accentColor)"
        : ideo.ideosPriority === "Medium"
        ? "var(--mediumAccentColor)"
        : "var(--lowAccentColor)",
    color:
      ideo.ideosPriority === "High" ? "var(--darkText)" : "var(--lightText)",
  };

  return (
    <div
      className={ideoDiv}
      id={ideo._id}
      style={{
        backgroundColor: colorScheme.backgroundColor,
        color: colorScheme.color,
      }}
    >
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
          <img className={ideoIcons} src="/icons/calendar.png" alt="calendar" />
          {new Date(ideo.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "2-digit",
          })}
        </div>
      </div>

      <img className={ideoPinIcon} src="/icons/three-dots.png" alt="three-dots" />
    </div>
  );
};

Ideo.propTypes = {
  ideo: PropTypes.object.isRequired,
};

export default Ideo;
