import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <label htmlFor="category">Category</label>
        <input id="category" type="text" required={true} />
        <br/>

        <label htmlFor="subcategory">Subcategory</label>
        <input id="subcategory" type="text" required={true} />
        <br/>

        <label htmlFor="text">Text</label>
        <input id="text" type="text" required={true} />
        <br/>

        <label htmlFor="alignment">Alignment</label>
        <select name="align-items" id="align-items" required={true}>
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="center">Center</option>
          <option value="justify">Justify</option>
        </select>
        <br/>

        <label htmlFor="urllink">Url link</label>
        <input id="urllink" type="text" required={true} />
        <br/>

        <label htmlFor="type">Type</label>
        <select name="type" id="type" required={true}>
          <option value="image">Image</option>
          <option value="text">Text</option>
          <option value="table">Table</option>
        </select>
        <br/>

        <label htmlFor="text">Type Text</label>
        <select name="type" id="type" required={true}>
          <option value="h1">Tittle 1</option>
          <option value="h2">Tittle 2</option>
          <option value="p">Simple</option>
        </select>
        <br/>

        <label htmlFor="imageurl">Url Image</label>
        <input id="imageurl" type="text" required={true} />
        <br/>

        <input type="submit"/>
      </form>
    </>
  );
};

export default Form;
