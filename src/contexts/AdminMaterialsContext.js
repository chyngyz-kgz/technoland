import axios from 'axios';
import React, { useContext, useReducer } from 'react';
import { useState } from 'react';
import { ADD_MATERIAL_API } from '../helpers/constants';
import { materialsContext } from './MateriasContext';

export const adminMaterialsContext = React.createContext();

const INIT_STATE = {
    materials: [],
    uploadingMessage: '',
    progress: null
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_MATERIALS":
            return {
                ...state,
                materials: action.payload
            }
        case "GET_UPLOADING_MESSAGE":
            return {
                ...state,
                uploadingMessage: action.payload
            }
        case "GET_UPLOADING_PROGRESS":
            return {
                ...state,
                progress: action.payload
            }
        default:
            return state
    }
}

const AdminMaterialsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [addingMaterial, setAddingMaterial] = useState(false);
    const { getMaterials } = useContext(materialsContext);

    async function uploadFile(formData) {
        console.log(formData);
        try {
            const { data } = await axios.post(ADD_MATERIAL_API, formData, {
                headers: { 'content-type': 'multipart/form-data' },
                onUploadProgress: data => {
                    //Set the progress value to show the progress bar
                    dispatch({
                        type: "GET_UPLOADING_PROGRESS",
                        payload: Math.round((100 * data.loaded) / data.total)
                    });
                },
            });
            dispatch({
                type: "GET_UPLOADING_MESSAGE",
                payload: data.message,
            });
            dispatch({
                type: "GET_UPLOADING_PROGRESS",
                payload: null
            });
            if (data.status === "success") {
                setTimeout(() => {
                    setAddingMaterial(false);
                }, 2000);
                dispatch({
                    type: "GET_UPLOADING_MESSAGE",
                    payload: ''
                });
            }
            console.log(data);
            getMaterials();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <adminMaterialsContext.Provider value={{
            progress: state.progress,
            uploadingMessage: state.uploadingMessage,
            addingMaterial,
            setAddingMaterial,
            uploadFile
        }}>
            {children}
        </adminMaterialsContext.Provider>
    )
}

export default AdminMaterialsContextProvider;