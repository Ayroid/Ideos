// IMPORTS
import PropTypes from "prop-types";
import styles from "./FileSelect.module.css";

// CSS STYLES
const { formInputDiv, formInput, label } = styles;

// COMPONENT
const FileSelect = ({
  id,
  valueUpdater,
  inputLabel,
  required,
}) => {
  return (
    <div className={formInputDiv}>
      <input
        id={id}
        className={formInput}
        accept="image/*"
        type="file"
        onChange={valueUpdater}
        placeholder=""
        required={required}
      />
      <label htmlFor={id} className={label}>
        {inputLabel}
      </label>
    </div>
  );
};

FileSelect.propTypes = {
  id: PropTypes.string.isRequired,
  valueUpdater: PropTypes.func.isRequired,
  inputLabel: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

export default FileSelect;
