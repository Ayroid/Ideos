import styles from "./CRUDButton.module.css";
import PropTypes from "prop-types";

const { crudButton } = styles;

const CRUDButton = ({ style, text, action }) => {
  return (
    <button className={crudButton} style={style} onClick={action}>
      {text}
    </button>
  );
};

CRUDButton.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default CRUDButton;
