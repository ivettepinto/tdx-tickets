import React, { useState, useEffect, useContext } from "react";
import ImageFieldForm from "./ImageFieldForm";
import TextFieldForm from "./TextFieldForm";
import typeOptions from "../../helpers/TypeOptions";
import SelectField from "../UI/input/SelectField";
import uniqid from "uniqid";
import { CategoryDetailFieldForm } from "./CategoryDetailFieldForm";
import { HelpContext } from "../../context/HelpFormsContext";

import "./CreateUpdateForm.css";

const CreateUpdateForm = (props) => {
  const { onSubmitDataIntoJson, onAddingFields } =
    useContext(HelpContext);

  const [category, setCategory] = useState(props.category ?? "");
  const [subcategory, setSubcategory] = useState(props.subcategory ?? "");
  const [fields, setFields] = useState(props.fields ?? []);
  const [newFieldType, setNewFieldType] = useState("");
  const [jsonToSend, setJsonToSend] = useState({
    id: "",
    category: "",
    subcategory: "",
    field: [],
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleOnChange = (index, event) => {
    let data = [...fields];
    data[index][event.target.name] = event.target.value;
    setFields(data);
  };

  const addFields = (type) => {
    let genericField = {
      type: newFieldType,
      text: "",
      align: "",
      classname: "",
      urllink: "",
    };
    let specificField = {};
    switch (type) {
      case "text":
        specificField = { ...genericField };
        setFields([...fields, specificField]);
        break;
      case "image":
        specificField = { ...genericField, imageurl: "" };
        setFields([...fields, specificField]);
        break;
      default:
        break;
    }
  };

  const sendMessageDoneAndClean = () => {
    setShowMessage(true);
    setCategory("");
    setSubcategory("");
    setNewFieldType("");
    setFields([]);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const handlerOnClickSubmit = (e) => {
    e.preventDefault();

    setJsonToSend({
      id: uniqid(),
      category: category,
      subcategory: subcategory,
      field: fields,
    });
    sendMessageDoneAndClean();
  };

  useEffect(() => {
    if (jsonToSend.id !== "") {
      onSubmitDataIntoJson(jsonToSend);
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jsonToSend]);

  useEffect(() => {
    onAddingFields(fields);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);

  return (
    <form className="column">
      <h2 className="column-title">Help form data</h2>
      <CategoryDetailFieldForm
        onSetCategory={setCategory}
        onSetSubCategory={setSubcategory}
        categoryValue={category}
        subCategoryValue={subcategory}
      />
      <hr />
      <SelectField
        className={"form-field"}
        name={"Type"}
        setSelect={setNewFieldType}
        required={true}
        options={typeOptions}
      />

      <button
        className="btn"
        onClick={() => {
          addFields(newFieldType);
        }}
      >
        Add fields
      </button>
      {fields.map((input, index) => (
        <div key={index} className="formField">
          <fieldset>
            <legend>
              <b>{input.type.toUpperCase()}</b>
            </legend>

            <TextFieldForm
              {...input}
              index={index}
              handleOnChange={handleOnChange}
            />
            {"imageurl" in input && (
              <ImageFieldForm
                {...input}
                index={index}
                handleOnChange={handleOnChange}
              />
            )}
          </fieldset>
        </div>
      ))}

      <button className="btn" onClick={handlerOnClickSubmit} type="submit">
        {
          props.id === "" ? "Update" : "Submit"
        }
      </button>
      {showMessage && (
        <h2 style={{ color: "#66cc00", textAlign: "center" }}>
          Record submitted successfully!
        </h2>
      )}
    </form>
  );
};

export default CreateUpdateForm;
