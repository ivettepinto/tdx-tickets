import React, { useContext, useState } from 'react'
import { HelpContext } from '../context/HelpFormsContext';
import { useParams } from 'react-router-dom';

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
      <h1>ola</h1>
    </div>

  )
}

export default EditHomePage