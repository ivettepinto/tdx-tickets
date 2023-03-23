import React, { useState } from "react";




const Form = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const [fields, setFields] = useState([
    {
      text: "",
      alignment: "",
      urllink: "",
      type: "",
      typeText: "",
      imageUrl: "",
    },
  ]);

  const handleOnChange = (index,event) => {
    let data = [...fields];
    data[index][event.target.name] = event.target.value;
    setFields(data);
  }

  const addFields = () =>{
    let newField = {
      text: "",
      alignment: "",
      urllink: "",
      type: "",
      typeText: "",
      imageUrl: "",
    }
    setFields([...fields, newField])

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

        {fields.map((input, index) => (
          <div key={index}>
            <label htmlFor="text">Text</label>
            <input onChange={(event) => handleOnChange(index,event)} id="text" name="text" type="text" required={true} value={input.text}/>
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
            <input onChange={(event) => handleOnChange(index,event)} id="urllink" name="urllink" type="text" required={true} value={input.urllink}/>
            <br />

            <label htmlFor="type">Type</label>
            <select onChange={(event) => handleOnChange(index,event)} name="type" id="type" required={true} value={input.type} >
              <option value="image">Image</option>
              <option value="text">Text</option>
              <option value="table">Table</option>
            </select>
            <br />

            <label htmlFor="text">Type Text</label>
            <select onChange={(event) => handleOnChange(index,event)} name="type" id="type" required={true} value={input.typeText}>
              <option value="h1">Tittle 1</option>
              <option value="h2">Tittle 2</option>
              <option value="p">Simple</option>
            </select>
            <br />

            <label htmlFor="imageurl">Url Image</label>
            <input onChange={(event) => handleOnChange(index,event)} name="imageurl" id="imageurl" type="text" required={true} value={input.imageurl}/>
            <br />
            <br />
            <br />
          </div>
        ))}

        <button onClick={addFields}>Add fields</button>


        <input type="submit" />
        

      </form>
    </>
  );
};

export default Form;
