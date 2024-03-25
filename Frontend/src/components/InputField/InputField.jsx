// IMPORTS
import PropTypes from "prop-types";
import styles from "./InputField.module.css";

// CSS STYLES
const { formInputDiv, formInput, label } = styles;

// COMPONENT
const InputField = ({
  id,
  type,
  value,
  valueUpdater,
  inputLabel,
  required,
}) => {
  return (
    <div className={formInputDiv}>
      <input
        id={id}
        className={formInput}
        type={type}
        value={value}
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

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  valueUpdater: PropTypes.func.isRequired,
  inputLabel: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

export default InputField;
