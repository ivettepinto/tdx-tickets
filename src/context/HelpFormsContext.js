import { createContext, useState, useEffect } from 'react';

const HelpContext = createContext();

const HelpProvider = (props) => {
    const [jsonData, setJsonData] = useState([]);
    const [fields, setFields] = useState([]);

    useEffect(() => {
    }, [jsonData]);

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

    const getDataById = (id) => {
        const foundItem = jsonData.find((item) => item.id === id);
        console.log(foundItem)
        return foundItem;
      }

    const removeDataById = (id) => {
        const newJsonData = jsonData.filter(item => item.id !== id);
        setJsonData(newJsonData);
      }

    const editDataById = (id,newData) => {
        setJsonData(jsonData[id] = newData)
    }
    

    return (
        <HelpContext.Provider
            value={{
                fields: fields,
                jsonData: jsonData,
                onAddingFields: addingFields,
                onSubmitDataIntoJson: submitDataIntoJson,
                getDataById,
                removeDataById,
                editDataById
            }}>
            {props.children}
        </HelpContext.Provider>
    )
}


export {
    HelpContext,
    HelpProvider,
}