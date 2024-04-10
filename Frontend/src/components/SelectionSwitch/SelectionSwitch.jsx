import PropTypes from "prop-types";
import styles from "./SelectionSwitch.module.css";

const {
  selectionSwitchDiv,
  label,
  selectionSwitchOptions,
  selectionSwitchOption,
  selectionSwitchActive,
} = styles;

const SelectionSwitch = ({ id, inputLabel, value, valueUpdater, options }) => {
  return (
    <div className={selectionSwitchDiv}>
      <label htmlFor={id} className={label}>
        {inputLabel}
      </label>
      <div id={id} className={selectionSwitchOptions}>
        {options.map((option) => (
          <div
            key={option.toLowerCase()}
            className={[
              selectionSwitchOption,
              value === option ? selectionSwitchActive : "",
            ].join(" ")}
            style={{
              width: `${100 / options.length}%`,
            }}
            onClick={() => valueUpdater(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

SelectionSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  valueUpdater: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default SelectionSwitch;
