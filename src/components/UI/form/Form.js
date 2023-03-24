import React, { useState, useEffect } from "react";
import ImageField from "./ImageFieldForm";
import TextField from "./TextFieldForm";
import HelpForm from "../helpForm/HelpForm";

import "./Form.css";

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
      alignment: "",
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
    console.log(jsonToSend);
  }, [jsonToSend]);

  return (
    <div className="container">
      <form className="column">
      <h2 className="column-title">Help form data</h2>
        <div className="form-field">
          <label htmlFor="category">Category</label>
          <input
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            type="text"
            name="category"
          />
        </div>

        <div className="form-field">
          <label htmlFor="subcategory">Subcategory</label>
          <input
            onChange={(e) => setSubcategory(e.target.value)}
            id="subcategory"
            type="text"
            name="subcategory"
          />
        </div>

        <div className="form-field">
        <label htmlFor="text">Type Text</label>
        <select
          defaultValue="default"
          onChange={(e) => setNewFieldType(e.target.value)}
          name="type"
          id="type"
          required={true}
        >
          <option value="default" disabled={true}>
            Select a type
          </option>
          <option value="image">Image</option>
          <option value="text">Text</option>
          <option value="table">Table</option>
        </select>
        </div>

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
          Preview
        </button>
      </form>

      <div className="column">
        <h2 className="column-title">Preview</h2>
        {jsonToSend.field.length > 0 && (
          <HelpForm
            onShowModal={showModal}
            data={jsonToSend.field}
            view={"preview"}
          />
        )}
      </div>
    </div>
  );
};

export default Form;
