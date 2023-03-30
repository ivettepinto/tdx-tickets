import { createContext, useState } from 'react';

const HelpContext = createContext({
    fields: [],
    jsonData: [],
    onAddingFields: () => {},
    onSubmitDataIntoJson: () => {},
});

const HelpProvider = (props) => {
    const [jsonData, setJsonData] = useState([]);
    const [fields, setFields] = useState([]);

    const addingFields = (newFields) => {
        setFields((prevState) => ({
            ...prevState,
            newFields,
        }))
    }
    
    const submitDataIntoJson = (elements) => {
        console.log("FIELDS REC: ",elements);
        setJsonData(elements);
        console.log("CONTEXT: ", jsonData);
    };

    return (
        <HelpContext.Provider
            value={{
                fields: fields,
                jsonData: jsonData,
                onAddingFields: addingFields,
                onSubmitDataIntoJson: submitDataIntoJson,
            }}>
            {props.children}
        </HelpContext.Provider>
    )
}

export {
    HelpContext,
    HelpProvider,
}