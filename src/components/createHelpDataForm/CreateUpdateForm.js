import React, { useState, useEffect, useContext } from "react";
import ImageFieldForm from "./ImageFieldForm";
import TextFieldForm from "./TextFieldForm";
import typeOptions from "../../helpers/TypeOptions";
import SelectField from "../UI/input/SelectField";
import uniqid from "uniqid";
import { HelpContext } from "../../context/HelpFormsContext";

import "./CreateUpdateForm.css";

const CreateUpdateForm = (props) => {
  const { onSubmitDataIntoJson, onAddingFields, editDataById } =
    useContext(HelpContext);

  const [fields, setFields] = useState(props.data.field ?? []);
  const [newFieldType, setNewFieldType] = useState("");
  const [jsonToSend, setJsonToSend] = useState({
    id: "",
    category: "",
    subcategory: "",
    field: [],
  });
  const handleOnChange = (index, event) => {
    let data = [...fields];
    data[index][event.target.name] = event.target.value;
    setFields(data);
  };

  const addFields = (type) => {
    let genericField = {
      type: newFieldType,
      text: "",
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

  const cleanFields = () => {
    setNewFieldType("");
    setFields([]);
    onAddingFields(fields);
  };

  const handlerOnClickSubmit = (e) => {
    e.preventDefault();

    setJsonToSend({
      id: props.data.id ?? uniqid(),
      field: fields,
    });
    if (props.data.length === 0) {
      alert("Item stored successfully!");
      cleanFields();
    } else {
      alert("Item updated successfully!");
      cleanFields();
    }
  };

  useEffect(() => {
    if (
      props.data.length === 0 &&
      jsonToSend.id !== ""
    ) {
      onSubmitDataIntoJson(jsonToSend);
    } else {
      editDataById(props.data.id, jsonToSend);
      
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
      <hr />
      <SelectField
        className={"form-field"}
        name={"Type"}
        setSelect={setNewFieldType}
        required={true}
        options={typeOptions}
        value={newFieldType}
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
        {props.data.length === 0 ? "Submit" : "Update"}
      </button>
    </form>
  );
};

export default CreateUpdateForm;
