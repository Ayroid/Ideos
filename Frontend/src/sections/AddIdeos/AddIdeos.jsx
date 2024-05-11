import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./AddIdeos.module.css";

import CRUDButton from "../../components/CRUDButton/CRUDButton";
import InputField from "../../components/InputField/InputField";
import DropDownSelectField from "../../components/DropDownSelectField/DropDownSelectField";
import TextAreaField from "../../components/TextAreaField/TextAreaField";
import SelectionSwitch from "../../components/SelectionSwitch/SelectionSwitch";
import FormLoading from "../../components/FormLoading/FormLoading";

const {
  mainDiv,
  loadingDiv,
  addIdeosForm,
  formHeading,
  ideosButtons,
  showMainAnimation,
  hideMainAnimation,
  scrollUpAnimation,
  scrollDownAnimation,
} = styles;

const AddIdeos = ({ showAddIdeos, hideAddIdeos }) => {
  const [loading, setLoading] = useState(false);
  const [ideosCategory, setIdeosCategory] = useState("Choose");
  const [ideosTitle, setIdeosTitle] = useState("");
  const [ideosDescription, setIdeosDescription] = useState("");
  const [ideosPriority, setIdeosPriority] = useState("Low");
  const [initalLoad, setInitalLoad] = useState(true);

  const updateIdeosCategory = (e) => {
    setIdeosCategory(e.target.value);
  };

  const updateIdeosTitle = (e) => {
    setIdeosTitle(e.target.value);
  };

  const updateIdeosDescription = (e) => {
    setIdeosDescription(e.target.value);
  };

  const updateIdeosPriority = (option) => {
    setIdeosPriority(option);
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

  const addNewIdeos = () => {
    setLoading(true);

    if (
      ideosCategory === "Choose" ||
      ideosTitle === "" ||
      ideosDescription === ""
    ) {
      setLoading(false);
      return;
    }

    const formData = {
      ideosCategory,
      ideosTitle,
      ideosDescription,
      ideosPriority,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/ideos`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        hideAddIdeos();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={mainDiv} id="addIdeosComp">
      {loading && (
        <div className={loadingDiv}>
          <FormLoading />
        </div>
      )}
      <div className={addIdeosForm} id="addIdeosForm">
        <h6 className={formHeading}>New Ideo</h6>
        <DropDownSelectField
          id="ideosCategory"
          value={ideosCategory}
          valueUpdater={updateIdeosCategory}
          inputLabel="Category"
          required={true}
          options={["Project", "DevOps", "Cloud", "UI/UX", "Cyber", "Linux"]}
          defaultOption="Choose"
        />
        <InputField
          id="ideosTitle"
          type="text"
          value={ideosTitle}
          valueUpdater={updateIdeosTitle}
          inputLabel="Title"
          placeholder="Ideos Title"
          required={true}
        />
        <TextAreaField
          cols="30"
          rows="30"
          id="ideosDesc"
          value={ideosDescription}
          valueUpdater={updateIdeosDescription}
          placeholder="Describe your ideos"
          inputLabel="Description"
        />
        <SelectionSwitch
          id="ideosPriority"
          inputLabel="Priority"
          value={ideosPriority}
          valueUpdater={updateIdeosPriority}
          options={["Low", "Medium", "High"]}
        />
        <div className={ideosButtons}>
          <CRUDButton
            text={"CANCEL"}
            action={hideAddIdeos}
            style={{
              backgroundColor: "var(--darkBg)",
              color: "var(--lightText)",
              width: "46%",
            }}
          />
          <CRUDButton
            text={"DONE"}
            action={addNewIdeos}
            style={{
              backgroundColor: "var(--accentColor)",
              color: "var(--darkText)",
              width: "46%",
            }}
          />
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
