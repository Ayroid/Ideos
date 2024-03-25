import styles from "./CRUDButton.module.css";
import PropTypes from "prop-types";

const { crudButton } = styles;

const CRUDButton = ({
  backgroundColor = "var(--accentColor)",
  color = "var(--darkText)",
  width = "100%",
  text,
  action,
}) => {
  return (
    <button
      className={crudButton}
      style={{ backgroundColor, color, width }}
      onClick={action}
    >
      {text}
    </button>
  );
};

CRUDButton.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default CRUDButton;
