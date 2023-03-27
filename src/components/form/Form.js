import React, { useState, useEffect } from "react";
import ImageField from "./ImageFieldForm";
import TextField from "./TextFieldForm";
import HelpForm from "../helpForm/HelpForm";

import "./Form.css";
import InputField from "./InputField";
import SelectField from "./SelectField";

const Form = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [fields, setFields] = useState([]);
  const [newFieldType, setNewFieldType] = useState("");
  const [jsonToSend, setJsonToSend] = useState({
    id: "",
    category: "",
    subcategory: "",
    field: [],
  });

  const [isShow, setIsShow] = useState(false);

  const showModal = () => {
    if (isShow === true) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };

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

  const handlerOnClickSubmit = (e) => {
    e.preventDefault();

    setJsonToSend({
      id: Math.random(),
      category,
      subcategory,
      field: fields,
    });
  };

  useEffect(() => {
  }, [fields]);

  const typeOptions = [
    { name: "Image", value: "image" },
    { name: "Text", value: "text" },
    { name: "Table", value: "table" },
  ];

  return (
    <div className="container">
      <form className="column">
        <h2 className="column-title">Help form data</h2>
        <InputField
          className={"form-field"}
          name={"category"}
          inputType={"text"}
          setInput={setCategory}
          required={true}
        />

        <InputField
          className={"form-field"}
          name={"subcategory"}
          inputType={"text"}
          setInput={setSubcategory}
          required={true}
        />

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
          Add fields{" "}
        </button>
        {fields.map((input, index) => (
          <div key={index}>
            <TextField
              {...input}
              index={index}
              handleOnChange={handleOnChange}
            />
            {"imageurl" in input && (
              <ImageField
                {...input}
                index={index}
                handleOnChange={handleOnChange}
              />
            )}
          </div>
        ))}

        <button className="btn" onClick={handlerOnClickSubmit} type="submit">
          Submit
        </button>
      </form>

      <div className="column">
        <h2 className="column-title">Preview</h2>
        {fields.length > 0 && (
          <HelpForm
            onShowModal={showModal}
            data={fields}
            view={"preview"}
          />
        )}
      </div>
    </div>
  );
};

export default Form;
