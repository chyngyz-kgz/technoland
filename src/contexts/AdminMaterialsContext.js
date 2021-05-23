import axios from 'axios';
import React, { useReducer } from 'react';
import { useState } from 'react';
import { ADD_MATERIAL_API } from '../helpers/constants';

export const adminMaterialsContext = React.createContext();

const INIT_STATE = {
    materials: []
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_MATERIALS":
            return {
                ...state,
                materials: action.payload
            }
        default:
            return state
    }
}

const AdminMaterialsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [progress, setProgress] = useState();

    async function uploadFile(formData) {
        console.log(formData);
        try {
            const { data } = await axios.post(ADD_MATERIAL_API, formData, {
                headers: { 'content-type': 'multipart/form-data' },
                onUploadProgress: data => {
                    //Set the progress value to show the progress bar
                    setProgress(Math.round((100 * data.loaded) / data.total));
                    console.log(progress);
                },
            });
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <adminMaterialsContext.Provider value={{
            progress,
            uploadFile
        }}>
            {children}
        </adminMaterialsContext.Provider>
    )
}

export default AdminMaterialsContextProvider;