import axios from 'axios';
import React, { useReducer } from 'react';
import { ADD_EVENT_API } from '../helpers/constants';

export const adminNewsContext = React.createContext();

const INIT_STATE = {
    news: [],
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_NEWS":
            return {
                ...state,
                news: action.payload
            }
        default:
            return state
    }
}

const AdminNewsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function postEvent(newEvent) {
        try {
            const { data } = await axios.post(ADD_EVENT_API, newEvent);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <adminNewsContext.Provider value={{
            postEvent
        }}>
            {children}
        </adminNewsContext.Provider>
    )
}

export default AdminNewsContextProvider;