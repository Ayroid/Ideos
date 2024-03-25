import PropTypes from "prop-types";
import styles from "./TextAreaField.module.css";

// CSS STYLES
const textAreaDiv = [styles.textAreaDiv].join("");
const textArea = [styles.textArea].join("");
const label = [styles.label].join("");

const TextAreaField = ({
  id,
  value,
  cols,
  rows,
  valueUpdater,
  placeholder,
  inputLabel,
}) => {
  return (
    <div className={textAreaDiv}>
      <label htmlFor={id} className={label}>
        {inputLabel}
      </label>
      <textarea
        id={id}
        className={textArea}
        cols={cols}
        rows={rows}
        value={value}
        onChange={valueUpdater}
        placeholder={placeholder}
      />
    </div>
  );
};

TextAreaField.propTypes = {
  id: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  valueUpdater: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
};

export default TextAreaField;
