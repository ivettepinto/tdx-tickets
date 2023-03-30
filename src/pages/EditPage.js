import React, { useContext, useState } from 'react'
import { HelpContext } from '../context/HelpFormsContext';
import { useParams } from 'react-router-dom';
import { CategoryDetailFieldForm } from '../components/createHelpDataForm/CategoryDetailFieldForm';
import TextFieldForm from '../components/createHelpDataForm/TextFieldForm';
import ImageFieldForm from '../components/createHelpDataForm/ImageFieldForm';
import PreviewForm from '../components/previewHelpForm/PreviewForm';
import "./CreatePage.css";

function EditHomePage() {
  const {id} = useParams()
  const { getDataById, editDataById } = useContext(HelpContext);
  const getJson = getDataById(id)
  const [category, setCategory] = useState(getJson.category);
  const [subcategory, setSubcategory] = useState(getJson.subcategory);
  const [fields, setFields] = useState(getJson.field);

  console.log(getJson.category)
  console.log(getJson.subcategory)

  const [jsonToSend, setJsonToSend] = useState({
    id: id,
    category: "",
    subcategory: "",
    field: [],
  });

  const handleOnChange = (index, event) => {
    let data = [...fields];
    data[index][event.target.name] = event.target.value;
    setFields(data);
  };

  const handlerOnClickSubmit = (e) => {
    e.preventDefault();
    setJsonToSend({
      category: category,
      subcategory: subcategory,
      field: fields,
    });
    editDataById(id,jsonToSend)
  }

  
  return (
    <div className="container">
      <CategoryDetailFieldForm
        onSetCategory={setCategory}
        onSetSubCategory={setSubcategory}
        categoryValue = {category}
        subCategoryValue = {subcategory}
        />

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
      <button className="btn" onClick={handlerOnClickSubmit} type="submit">Update</button>

      <PreviewForm />
    </div>

  )
}

export default EditHomePage