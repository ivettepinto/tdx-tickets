import React, { useState } from "react";
import Input from "../../UI/input/Input";
import ImageFieldForm from "./field/ImageFieldForm";
import TextFieldForm from "./field/TextFieldForm";

const FieldItem = (props) => {

    const [text, setText] = useState("");
    const [alignment, setAlignment] = useState("center");
    const [urlLink, setUrlLink] = useState("");

    const [extraParemeters, setExtraParemeters] = useState({});

    const getFieldType = () => {
        {
            console.log(props.field)
            if (props.field.type === "image"){
                return (<ImageFieldForm type={props.type} state={extraParemeters} setState={setExtraParemeters} />)
            }
            return (<TextFieldForm type={props.type} state={extraParemeters} setState={setExtraParemeters} />)
        }
    }
    const updateHandler = () => {
        //props.updateFieldHandler({})
    }

    return (
        <li key={props.position}>
            <div className="form-field">
                <h2>{props.type}</h2>

                <Input
                    text="Text"
                    id="text"
                    className=""
                    inputField={text}
                    setInputField={setText}
                />

                <Input
                    text="Alignment"
                    id="Alignment"
                    className=""
                    inputField={alignment}
                    setInputField={setAlignment}
                />

                <Input
                    text="URL link"
                    id="urllink"
                    className=""
                    inputField={urlLink}
                    setInputField={setUrlLink}
                />
                {getFieldType()}
            </div>
        </li>
    );
};

export default FieldItem;
