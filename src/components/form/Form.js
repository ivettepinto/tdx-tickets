import React, { useState, useEffect } from "react";
import ImageFieldForm from "./ImageFieldForm";
import TextFieldForm from "./TextFieldForm";
import typeOptions from "../../helpers/TypeOptions";

import "./Form.css";
import InputField from "../UI/input/InputField";
import SelectField from "../UI/input/SelectField";

const Form = (props) => {

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

  //==> se desestructura as a first step
  useEffect(() => {
    console.log(fields);
    props.onAddingFiels(fields);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);

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

export default Form;
