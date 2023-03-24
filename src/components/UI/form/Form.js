import React, { useState } from "react";
import ImageField from "./ImageField";
import TextField from "./TextField";

const Form = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [fields, setFields] = useState([]);
  const [newFieldType, setNewFieldType] = useState("");
  const [jsonToSend, setJsonToSend] = useState({});

  const handleOnChange = (index, event) => {
    let data = [...fields];
    data[index][event.target.name] = event.target.value;
    setFields(data);
  }

  const addFields = (type) => {
    let genericField = {
      type: newFieldType,
      text: "",
      alignment: "",
      urllink: "",
    }
    let specificField = {};
    switch (type) {
      case "text": 
        specificField = { ...genericField };
        setFields([...fields, specificField]);
        break;
      case "image": 
        specificField = { ...genericField, imageurl: ""};
        setFields([...fields, specificField]);
        break;
      default:
        break;
    }
  }

  const handlerOnClickSubmit = (e) => {
    e.preventDefault();
    setJsonToSend((prevState) => ({
      ...prevState,
      category,
      subcategory,
      fields: fields,
    }));
    console.log(jsonToSend);
  }

  return (
    <>
      <form>
        <label htmlFor="category">Category</label>
        <input
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          type="text"
          name="category"
        />
        <br />

        <label htmlFor="subcategory">Subcategory</label>
        <input
          onChange={(e) => setSubcategory(e.target.value)}
          id="subcategory"
          type="text"
          name="subcategory"
        />
        <br />

        <label htmlFor="text">Type Text</label>
        <select defaultValue="default" onChange={e => setNewFieldType(e.target.value)} name="type" id="type" required={true} >
          <option value="default" disabled={true}>Select a type</option>
          <option value="image">Image</option>
          <option value="text">Text</option>
          <option value="table">Table</option>

        </select>
        <br />

        <button onClick={() => { addFields(newFieldType) }}>Add fields </button>
        {fields.map((input, index) => (
          <div key={index}>
            <TextField {...input} index={index} handleOnChange={handleOnChange} />
            {
              "imageurl" in input && <ImageField {...input} index={index} handleOnChange={handleOnChange} />

            }
          </div>
        ))}

        <button onClick={handlerOnClickSubmit} type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;
