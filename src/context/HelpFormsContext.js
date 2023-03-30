import { createContext, useState, useEffect } from 'react';

const HelpContext = createContext();

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
        setJsonData([
            ...jsonData,
            elements
        ]);
        setFields([]);
    };
    
    useEffect(() => {
    }, [jsonData]);

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