import React, { useState, useEffect } from "react";
import ImageFieldForm from "./ImageFieldForm";
import TextFieldForm from "./TextFieldForm";
import typeOptions from "../../helpers/TypeOptions";

import "./CreateUpdateForm.css";
import SelectField from "../UI/input/SelectField";
import { CategoryDetailFieldForm } from "./CategoryDetailFieldForm";

const CreateUpdateForm = (props) => {

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
    props.onAddingFiels(fields);

  //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fields]);

  return (
    <div className="container">
      <form className="column">
        <h2 className="column-title">Help form data</h2>
        <CategoryDetailFieldForm onSetCategory={setCategory} onSetSubCategory={setSubcategory} />
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
          Add fields{" "}
        </button>
        {fields.map((input, index) => (
          <div key={index}>
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
          </div>
        ))}

        <button className="btn" onClick={handlerOnClickSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUpdateForm;
