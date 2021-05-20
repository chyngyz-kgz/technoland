import axios from 'axios';
import React, { useReducer } from 'react';
import { ADD_MATERIAL_API } from '../helpers/constants';

export const adminMaterialsContext = React.createContext();

const INIT_STATE = {
    materials: [],
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

    async function uploadFile(formData) {
        try {
            const { data } = await axios.post(ADD_MATERIAL_API, formData, {
                'content-type': 'multipart/form-data'
            });
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <adminMaterialsContext.Provider value={{
            uploadFile
        }}>
            {children}
        </adminMaterialsContext.Provider>
    )
}

export default AdminMaterialsContextProvider;