import React, { useState, useEffect } from "react";
import InputField from "../../UI/input/InputField";
import SelectField from "../../UI/input/SelectField";
import Section from "../../UI/section/Section";
import classes from "./CreateField.module.css";

import "../Form.css";

const CreateField = () => {

    const typeOptions = [
        { name: "Image", value: "image" },
        { name: "Text", value: "text" },
        { name: "Table", value: "table" },
      ];



    return (
        <Section className={classes.article}>
            <form className="column">
                <h2 className="column-title">Help form data</h2>
                
              
                <button className="btn" type="submit">
                    ADD
                </button>
            </form>
        </Section>
    );
}


/*
<InputField
                    className={"form-field"}
         
                />

                <InputField
                    className={"form-field"}
                    name={"subcategory"}

                />

                <SelectField
                    className={"form-field"}
                    name={"Type"}

                    required={true}
                    options={typeOptions}
                />
*/

export default CreateField;
