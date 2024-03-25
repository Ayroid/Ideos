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
  placeholder,
  required,
}) => {
  return (
    <div className={formInputDiv}>
      <label htmlFor={id} className={label}>
        {inputLabel}
      </label>
      <input
        id={id}
        className={formInput}
        type={type}
        value={value}
        onChange={valueUpdater}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  valueUpdater: PropTypes.func.isRequired,
  inputLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

export default InputField;
