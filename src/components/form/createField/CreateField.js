import React, { useState } from "react";
import Section from "../../UI/section/Section";
import classes from "./CreateField.module.css";
import FieldTypes from '../FieldTypes';

import "../Form.css";
import Select from "../../UI/input/Select";

const CreateField = (props) => {


    const [FieldType, setFieldType] = useState(FieldTypes[0].value);

    const addSubmissionHandler = (event) => {
        event.preventDefault();

            props.addFieldHandler({
                type: FieldType
            });

           
            setFieldType(FieldTypes[0].value);
        
    }

    const selectChangeHandler = (event) => {
        setFieldType(event.target.value);
    }

    return (
        <Section className={classes.article}>
            <form onSubmit={addSubmissionHandler}>
                <h2 className="column-title">Create new Field Item</h2>
              
                <Select
                    label="Field Type"
                    options={FieldTypes}
                    value={FieldType}
                    onChange={selectChangeHandler}
                />
                <br />
                <input id="namesubmitcomponent" type="submit" value="check" className={classes.submit} />
            </form>
        </Section>
    );
}



export default CreateField;
