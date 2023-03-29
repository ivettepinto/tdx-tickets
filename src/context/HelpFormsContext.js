import { createContext, useState } from 'react';

const HelpContext = createContext({
    fields: [],
    previewerFields: [],
    onAddingFields: () => {},
    onGetCreatingFields: () => {},
});

const HelpProvider = (props) => {
    const [previewerFields, setPreviewerFields] = useState([]);
    const [fields, setFields] = useState([]);

    const addingFields = (newFields) => {
        setFields((prevState) => ({
            ...prevState,
            newFields,
        }))
    }
    
    const getCreatingFields = (fields) => {
        setPreviewerFields((prevState) => ({
          ...prevState,
          fields,
        }));
    };

    return (
        <HelpContext.Provider
            value={{
                fields: fields,
                previewerFields: previewerFields,
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