// IMPORTS
import PropTypes from "prop-types";
import styles from "./InputFieldAuth.module.css";

// CSS STYLES
const { formInputDiv, formInput, label } = styles;

// COMPONENT
const InputFieldAuth = ({
  id,
  type,
  value,
  valueUpdater,
  inputLabel,
  placeholder,
  required,
  color,
  bgColor,
}) => {
  return (
    <div className={formInputDiv}>
      <label htmlFor={id} className={label} style={{ color: bgColor }}>
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
        style={{
          color: color,
          backgroundColor: bgColor,
        }}
      />
    </div>
  );
};

InputFieldAuth.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  valueUpdater: PropTypes.func.isRequired,
  inputLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

export default InputFieldAuth;
