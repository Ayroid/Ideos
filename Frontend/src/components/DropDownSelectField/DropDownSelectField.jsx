// IMPORTS
import PropTypes from "prop-types";
import styles from "./DropDownSelectField.module.css";

// CSS STYLES
const { dropDownSelectDiv, dropDownSelect, label } = styles;

// COMPONENT
const DropDownSelectField = ({
  id,
  value,
  valueUpdater,
  inputLabel,
  required,
  options,
  defaultOption = "choose",
}) => {
  return (
    <div className={dropDownSelectDiv}>
      <label htmlFor={id} className={label}>
        {inputLabel}
      </label>
      <select
        className={dropDownSelect}
        value={value}
        id={id}
        name={inputLabel}
        onInput={valueUpdater}
        required={required}
      >
        <option id="defaultDrop" defaultChecked defaultValue={defaultOption}>
          {defaultOption}
        </option>
        {options.map((option) => (
          <option key={option.toLowerCase()} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

DropDownSelectField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  valueUpdater: PropTypes.func.isRequired,
  inputLabel: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  defaultOption: PropTypes.string.isRequired,
};

export default DropDownSelectField;
