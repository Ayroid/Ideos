import styles from "./CRUDButton.module.css";
import PropTypes from "prop-types";

const { crudButton } = styles;

const CRUDButton = ({
  backgroundColor = "var(--accentColor)",
  color = "var(--darkText)",
  width = "100%",
  height,
  style,
  text,
  action,
}) => {
  return (
    <button className={crudButton} style={style} onClick={action}>
      {text}
    </button>
  );
};

CRUDButton.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default CRUDButton;
