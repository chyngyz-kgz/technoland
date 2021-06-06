import axios from 'axios';
import React, { useReducer } from 'react';
import { ADMIN_AUTH_API, CHECK_ADMIN_AUTH_API } from '../helpers/constants'
import Cookies from 'universal-cookie';

export const adminAuthContext = React.createContext();

const ADMIN_INIT_STATE = {
    admin: null,
    adminAuthMessage: ''
}

const reducer = (state = ADMIN_INIT_STATE, action) => {
    switch (action.type) {
        case "GET_ADMIN_INFO":
            return {
                ...state,
                admin: action.payload
            }
        case "GET_ADMIN_AUTH_MESSAGE":
            return {
                ...state,
                adminAuthMessage: action.payload
            }
        default:
            return state
    }
}

const AdminAuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, ADMIN_INIT_STATE);
    const cookies = new Cookies();

    async function loginAdmin(adminData, history) {
        try {
            const { data } = await axios.post(`${ADMIN_AUTH_API}`, adminData);
            if (data.success && data.token) {
                cookies.set('techAdminCookie', JSON.stringify(data.token));
                dispatch({
                    type: "GET_ADMIN_INFO",
                    payload: data.user
                });
                history.push('/admin-panel-news')
            }
            dispatch({
                type: "GET_ADMIN_AUTH_MESSAGE",
                payload: data.message
            });
            console.log(data);
        } catch (err) {
            console.log(err);
        }
        isAdminLogedIn();
    }

    async function logoutAdmin() {
        cookies.remove('techAdminCookie');
        dispatch({
            type: "GET_ADMIN_INFO",
            payload: null
        });
    }

    async function isAdminLogedIn() {
        const adminToken = cookies.get('techAdminCookie');

        if (adminToken) {

            //Добавление токена в качестве headers по умолчанию
            axios.defaults.headers.common['Authorization'] = 'bearer ' + adminToken;

            //Отправка данных на сервер для проверки токена
            const { data } = await axios.get(CHECK_ADMIN_AUTH_API);

            if (data.success && data.user) {
                dispatch({
                    type: "GET_ADMIN_INFO",
                    payload: data.user
                });
            }
            console.log(data);
        }
    }

    return (
        <adminAuthContext.Provider value={{
            admin: state.admin,
            adminAuthMessage: state.adminAuthMessage,
            loginAdmin,
            logoutAdmin,
            isAdminLogedIn
        }}>
            {children}
        </adminAuthContext.Provider>
    )
}

export default AdminAuthContextProvider;