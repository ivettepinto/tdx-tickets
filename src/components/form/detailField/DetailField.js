import React from 'react';
import Section from '../../UI/section/Section';
import classes from './DetailField.module.css';
import FieldItem from './FieldItem';



const DetailField = (props) => {


    return (
        <Section className={classes.section}>
                <h2 className="column-title">Detail fields</h2>
                <ul>
                  {props.fields.map(field =>(<FieldItem field={field} updateFieldHandler={props.updateFieldHandler} />))}
                </ul>
            
        </Section>
    );
}

/*
{fields.map((input, index) => (
          <div key={index}>
            <TextField
              {...input}
              index={index}
              handleOnChange={handleOnChange}
            />
            {"imageurl" in input && (
              <ImageField
                {...input}
                index={index}
                handleOnChange={handleOnChange}
              />
            )}
*/


export default DetailField;
