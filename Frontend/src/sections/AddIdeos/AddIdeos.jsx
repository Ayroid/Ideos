import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./AddIdeos.module.css";

import CRUDButton from "../../components/CRUDButton/CRUDButton";
import InputField from "../../components/InputField/InputField";
import TextAreaField from "../../components/TextAreaField/TextAreaField";

const { mainDiv, addIdeosForm, formHeading, ideosButtons } = styles;

const AddIdeos = ({ hideAddIdeos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className={mainDiv}>
      <div className={addIdeosForm}>
        <h6 className={formHeading}>New Ideo</h6>
        <InputField
          id="ideosTitle"
          type="text"
          value={title}
          valueUpdater={updateTitle}
          inputLabel="Category"
          placeholder="Choose"
          required={true}
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
        <InputField
          id="ideosTitle"
          type="text"
          value={title}
          valueUpdater={updateTitle}
          inputLabel="Category"
          placeholder="Choose"
          required={true}
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
  hideAddIdeos: PropTypes.func.isRequired,
  showAddIdeos: PropTypes.func.isRequired,
};

export default AddIdeos;
