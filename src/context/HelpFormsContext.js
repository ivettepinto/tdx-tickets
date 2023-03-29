import { createContext, useState } from 'react';

const HelpContext = createContext({
    fields: [],
    jsonData: [],
    onAddingFields: () => {},
    onGetCreatingFields: () => {},
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
    
    const getCreatingFields = (fields) => {
        setJsonData((prevState) => ({
          ...prevState,
          fields,
        }));
    };

    console.log(jsonData)

    return (
        <HelpContext.Provider
            value={{
                fields: fields,
                jsonData: jsonData,
                onAddingFields: addingFields,
                onGetCreatingFields: getCreatingFields,
            }}>
            {props.children}
        </HelpContext.Provider>
    )
}

export {
    HelpContext,
    HelpProvider,
}