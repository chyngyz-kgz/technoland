import axios from 'axios';
import React, { useReducer } from 'react';
import { ADD_EVENT_API, UPDATE_EVENT_API, DELETE_EVENT_API } from '../helpers/constants';

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

    async function postEvent(newEvent, history) {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        newEvent.date = today;

        let formData = new FormData();
        formData.append(
            'data',
            JSON.stringify(newEvent)
        );

        try {
            const { data } = await axios.post(ADD_EVENT_API, formData);
            console.log(data);

            history.push("/admin-panel-news");
        } catch (err) {
            console.log(err);
        }
    }

    async function editEvent(editedEvent, history) {
        try {
            const { data } = await axios.post(UPDATE_EVENT_API, editedEvent);
            console.log(data);
            history.push("/admin-panel-news");
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteEvent(id) {
        const dataToDelete = { id }
        try {
            const { data } = await axios.post(DELETE_EVENT_API, dataToDelete);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <adminNewsContext.Provider value={{
            postEvent,
            editEvent,
            deleteEvent
        }}>
            {children}
        </adminNewsContext.Provider>
    )
}

export default AdminNewsContextProvider;