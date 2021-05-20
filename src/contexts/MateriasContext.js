import axios from 'axios';
import React, { useReducer } from 'react';
import { GET_MATERIALS_API } from '../helpers/constants';

export const materialsContext = React.createContext();

const INIT_STATE = {
    materials: null,
    totalPages: 1,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_MATERIALS":
            return {
                ...state,
                totalPages: action.payload.totalPages,
                materials: action.payload
            }
        default:
            return state
    }
}

const MaterialsContextProvider = ({ children }) => {

    async function getMaterials() {
        const { data } = await axios.get(`${GET_MATERIALS_API}${window.location.search}`);
        console.log(data);
        dispatch({
            type: "GET_MATERIALS",
            payload: data
        });
    }

    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    return (
        <materialsContext.Provider value={{
            materials: state.materials,
            totalPages: state.totalPages,
            getMaterials
        }}>
            {children}
        </materialsContext.Provider>
    )
}

export default MaterialsContextProvider;