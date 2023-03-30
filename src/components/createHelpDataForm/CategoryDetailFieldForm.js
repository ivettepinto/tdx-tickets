import React from "react";
import InputField from "../UI/input/InputField";


export const CategoryDetailFieldForm = (props) => {
  return (
    <>
      <InputField
        className={"form-field"}
        name={"category"}
        inputType={"text"}
        setInput={props.onSetCategory}
        required={true}
        value={props.categoryValue}
      />
      <InputField
        className={"form-field"}
        name={"subcategory"}
        inputType={"text"}
        setInput={props.onSetSubCategory}
        required={true}
        value={props.subCategoryValue}
      />
    </>
  );
};
