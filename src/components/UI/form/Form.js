import React, { useState } from "react";

const Form = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [fields, setFields] = useState([]);
  const [newFieldType, setNewFieldType] = useState("");

  const handleOnChange = (index, event) => {
    let data = [...fields];
    data[index][event.target.name] = event.target.value;
    setFields(data);
  }

  const addFields = (type) => {
    let genericField = {
      type: "",
      text: "",
      alignment: "",
      urllink: "",
    }
    let specificField = {};
    switch (type) {
      case "text": specificField = { ...genericField }
      case "image": specificField = { ...genericField, imageUrl: "" }
    }

    setFields([...fields, specificField])
  }

  return (
    <>
      <form>
        <label htmlFor="category">Category</label>
        <input
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          type="text"
          required={true}
          name="category"
        />
        <br />

        <label htmlFor="subcategory">Subcategory</label>
        <input
          onChange={(e) => setSubcategory(e.target.value)}
          id="subcategory"
          type="text"
          required={true}
          name="subcategory"
        />
        <br />

        <label htmlFor="text">Type Text</label>
        <select onChange={e => setNewFieldType(e.target.value)} name="type" id="type" required={true} >
          <option value="image">Image</option>
          <option value="text">Text</option>
          <option value="table">Table</option>

        </select>
        <br />

        <button onClick={() => { addFields(newFieldType) }}> Add fields </button>
        {fields.map((input, index) => (
          <div key={index}>
            <label htmlFor="text">Text</label>
            <input onChange={(event) => handleOnChange(index, event)} id="text" name="text" type="text" required={true} value={input.text} />
            <br />
            <label htmlFor="alignment">Alignment</label>
            <select name="align-items" id="align-items" required={true}>
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="center">Center</option>
              <option value="justify">Justify</option>
            </select>
            <br />

            <label htmlFor="urllink">Url link</label>
            <input onChange={(event) => handleOnChange(index, event)} id="urllink" name="urllink" type="text" required={true} value={input.urllink} />
            <br />

            <label htmlFor="typeText">type Text</label>
            <select onChange={(event) => handleOnChange(index, event)} name="typeText" id="typeText" required={true} value={input.type}>
              <option value="h1">Tittle 1</option>
              <option value="h2">Tittle 2</option>
              <option value="p">Simple</option>
            </select>
            <br />

            {fields[index][input.type] === "text"

            }

          </div>
        ))}

        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
