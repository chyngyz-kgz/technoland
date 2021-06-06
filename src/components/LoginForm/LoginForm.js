import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { authContext } from '../../contexts/AuthContext';
import './LoginForm.css'

const LoginForm = () => {

    const { loginUser, authMessage } = useContext(authContext);
    const history = useHistory();

    const initialState = {
        userData: {
            email: '',
            password: ''
        },
        errorMsg: '',
        successMsg: ''
    }

    const [state, setState] = useState(initialState);
    const [passwordInpType, setpasswordInpType] = useState("password");

    function changesHandler(event) {
        setState({
            ...state,
            userData: {
                ...state.userData,
                [event.target.name]: event.target.value
            }
        });
    }

    function handleSubmitClick(event) {
        event.preventDefault();
        loginUser(state.userData, history)
    }

    function toggleInpType() {
        passwordInpType === "password" ? setpasswordInpType("text") : setpasswordInpType("password");
    }

    return (
        <form onSubmit={handleSubmitClick} className="login-form">
            <div className="email__block">
                <label>ЭЛ. ПОЧТА *</label>
                <input onChange={changesHandler} name="email" type="text" placeholder="Адрес эл. почты" />
            </div>
            <div className="password__block">
                <label>ПАРОЛЬ *</label>
                <input onChange={changesHandler} name="password" type={passwordInpType} placeholder="Пароль" />
                <label><input type="checkbox" onClick={toggleInpType} />Показать пароль</label>
            </div>
            <span className="login-form__error">{authMessage}</span>
            <button type="submit" className="login-form__btn">Войти</button>
        </form>
    );
};

export default LoginForm;