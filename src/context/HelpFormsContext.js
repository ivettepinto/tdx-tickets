import { createContext, useState, useEffect } from 'react';
import generatedJson from '../helpers/Generated.json';

const HelpContext = createContext();

const HelpProvider = (props) => {
    const [jsonData, setJsonData] = useState(generatedJson);
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
        return foundItem;
      }

    const removeDataById = (id) => {
        const newJsonData = jsonData.filter(item => item.id !== id);
        setJsonData(newJsonData);
      }

    const editDataById = (id,newData) => {
        const newJsonData = jsonData.map(item => item.id !== newData.id ? item : newData);
        setJsonData(newJsonData);
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