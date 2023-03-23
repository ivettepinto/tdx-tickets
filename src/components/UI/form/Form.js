import React, { useState } from "react";

const Form = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [text, setText] = useState("");
  const [alignment, setAlignment] = useState("");
  const [urllink, setUrllink] = useState("");
  const [type, setType] = useState("");
  const [typeText, setTypeText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  return (
    <>
      <form>
        <label htmlFor="category">Category</label>
        <input
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          type="text"
          required={true}
        />
        <br />

        <label htmlFor="subcategory">Subcategory</label>
        <input
          onChange={(e) => setSubcategory(e.target.value)}
          id="subcategory"
          type="text"
          required={true}
        />
        <br />

        <label htmlFor="text">Text</label>
        <input
          onChange={(e) => setText(e.target.value)}
          id="text"
          type="text"
          required={true}
        />
        <br />

        <label htmlFor="alignment">Alignment</label>
        <select
          onChange={(e) => setAlignment(e.target.value)}
          name="align-items"
          id="align-items"
          required={true}
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="center">Center</option>
          <option value="justify">Justify</option>
        </select>
        <br />

        <label htmlFor="urllink">Url link</label>
        <input
          onChange={(e) => setUrllink(e.target.value)}
          id="urllink"
          type="text"
          required={true}
        />
        <br />

        <label htmlFor="type">Type</label>
        <select
          onChange={(e) => setType(e.target.value)}
          name="type"
          id="type"
          required={true}
        >
          <option value="image">Image</option>
          <option value="text">Text</option>
          <option value="table">Table</option>
        </select>
        <br />

        {type === "text" ? (
          <>
            <label htmlFor="text">Type Text</label>
            <select
              onChange={(e) => setTypeText(e.target.value)}
              name="type"
              id="type"
              required={true}
            >
              <option value="h1">Tittle 1</option>
              <option value="h2">Tittle 2</option>
              <option value="p">Simple</option>
            </select>
            <br />
          </>
        ) : (
          <></>
        )}

        {type === "image" ? (
          <>
            <label htmlFor="imageurl">Url Image</label>
            <input
              onChange={(e) => setImageUrl(e.target.value)}
              id="imageurl"
              type="text"
              required={true}
            />
            <br />
          </>
        ) : (
          <></>
        )}

        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
