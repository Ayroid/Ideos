import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./AddIdeos.module.css";

import CRUDButton from "../../components/CRUDButton/CRUDButton";
import InputField from "../../components/InputField/InputField";
import DropDownSelectField from "../../components/DropDownSelectField/DropDownSelectField";
import TextAreaField from "../../components/TextAreaField/TextAreaField";
import SelectionSwitch from "../../components/SelectionSwitch/SelectionSwitch";

const {
  mainDiv,
  addIdeosForm,
  formHeading,
  ideosButtons,
  showMainAnimation,
  hideMainAnimation,
  scrollUpAnimation,
  scrollDownAnimation,
} = styles;

const AddIdeos = ({ showAddIdeos, hideAddIdeos }) => {
  const [category, setCategory] = useState("Choose");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [initalLoad, setInitalLoad] = useState(true);

  const updateCategory = (e) => {
    setCategory(e.target.value);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const updatePriority = (option) => {
    setPriority(option);
  };

  useEffect(() => {
    if (initalLoad) {
      setInitalLoad(false);
    } else {
      const ideosMainDiv = document.getElementById("addIdeosComp");
      const addIdeosForm = document.getElementById("addIdeosForm");
      if (showAddIdeos) {
        ideosMainDiv.style.display = "flex";
        ideosMainDiv.classList.remove(hideMainAnimation);
        ideosMainDiv.classList.add(showMainAnimation);
        addIdeosForm.classList.remove(scrollDownAnimation);
        addIdeosForm.classList.add(scrollUpAnimation);
      } else {
        ideosMainDiv.classList.remove(showMainAnimation);
        ideosMainDiv.classList.add(hideMainAnimation);
        addIdeosForm.classList.remove(scrollUpAnimation);
        addIdeosForm.classList.add(scrollDownAnimation);
        setTimeout(() => {
          ideosMainDiv.style.display = "none";
          ideosMainDiv.classList.remove(hideMainAnimation);
          addIdeosForm.classList.remove(scrollDownAnimation);
        }, 300);
      }
    }
  }, [showAddIdeos, initalLoad]);

  return (
    <div className={mainDiv} id="addIdeosComp">
      <div className={addIdeosForm} id="addIdeosForm">
        <h6 className={formHeading}>New Ideo</h6>
        <DropDownSelectField
          id="ideosCategory"
          value={category}
          valueUpdater={updateCategory}
          inputLabel="Category"
          required={true}
          options={["Tech", "Health", "Finance", "Education"]}
          defaultOption="Choose"
        />
        <InputField
          id="ideosTitle"
          type="text"
          value={title}
          valueUpdater={updateTitle}
          inputLabel="Title"
          placeholder="Ideos Title"
          required={true}
        />
        <TextAreaField
          cols="30"
          rows="30"
          id="ideosDesc"
          value={description}
          valueUpdater={updateDescription}
          placeholder="Describe your ideos"
          inputLabel="Description"
        />
        <SelectionSwitch
          id="ideosPriority"
          inputLabel="Priority"
          value={priority}
          valueUpdater={updatePriority}
          options={["Low", "Medium", "High"]}
        />
        <div className={ideosButtons}>
          <CRUDButton
            text={"CANCEL"}
            width="46%"
            backgroundColor="var(--darkBg)"
            color="var(--lightText)"
            action={hideAddIdeos}
          />
          <CRUDButton text={"DONE"} width="46%" action={hideAddIdeos} />
        </div>
      </div>
    </div>
  );
};

AddIdeos.propTypes = {
  showAddIdeos: PropTypes.bool.isRequired,
  hideAddIdeos: PropTypes.func.isRequired,
};

export default AddIdeos;
