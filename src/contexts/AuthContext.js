import axios from 'axios';
import React, { useReducer } from 'react';
import { AUTH_API, CHECK_AUTH_API, Axios } from '../helpers/constants';
import Cookies from 'universal-cookie';

export const authContext = React.createContext();

const INIT_STATE = {
    isAuth: false,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_AUTH_INFO":
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state
    }
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const cookies = new Cookies();

    async function registerUser(event, history) {
        event.preventDefault();
        const newUser = {
            email: event.target[0].value,
            password: event.target[2].value
        }

        try {
            const res = await axios.post(`${AUTH_API}/api/auth/register`, newUser);
            cookies.set('');
            history.push("/login");
        } catch (err) {
            console.log(err);
        }

    }

    async function loginUser(userData, history) {
        try {
            const { data } = await axios.post(`${AUTH_API}`, userData);
            if (data.success && data.token) {
                cookies.set('techCookie', JSON.stringify(data.token));
                dispatch({
                    type: "GET_AUTH_INFO",
                    payload: true
                });
                history.push("/materials");
            }
            console.log(data);
        } catch (err) {
            console.log(err);
        }

    }

    async function isUserLogedIn(history) {
        const userToken = cookies.get('techCookie');

        if (userToken) {

            //Добавление токена в качестве headers по умолчанию
            Axios.defaults.headers.common['Authorization'] = 'bearer ' + cookies.get('techCookie');

            //Отправка данных на сервер для проверки токена
            const { data } = await axios.get(CHECK_AUTH_API);

            if (data.success && data.user) {
                dispatch({
                    type: "GET_AUTH_INFO",
                    payload: true
                });
            } else {
                history.push("/login");
            }
            console.log(data);
        } else {
            history.push("/login");
        }
    }

    return (
        <authContext.Provider value={{
            isAuth: state.isAuth,
            registerUser,
            loginUser,
            isUserLogedIn
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider;