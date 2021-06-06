import React, { useContext, useEffect, useState } from 'react';
import './AdminPanel.css';
import { adminAuthContext } from '../../contexts/AdminAuthContext';
import { useHistory } from 'react-router-dom';
import AdminPanelNavBar from '../AdminPanelNavBar/AdminPanelNavBar';

const AdminPanel = () => {

    const { isAdminLogedIn, loginAdmin, admin, adminAuthMessage } = useContext(adminAuthContext);
    const history = useHistory();

    const initialState = {
        adminData: {
            email: '',
            password: ''
        },
        errorMsg: '',
        successMsg: ''
    }
    const [state, setState] = useState(initialState);
    const [passwordInpType, setpasswordInpType] = useState("password");


    useEffect(() => {
        isAdminLogedIn();
    }, []);

    function changesHandler(event) {
        setState({
            ...state,
            adminData: {
                ...state.adminData,
                [event.target.name]: event.target.value
            }
        });
    }

    function handleSubmitClick(event) {
        event.preventDefault();
        loginAdmin(state.adminData, history);
    }

    function toggleInpType() {
        passwordInpType === "password" ? setpasswordInpType("text") : setpasswordInpType("password");
    }

    return admin ?
        (
            <>
                <AdminPanelNavBar />
                <div className="admin-panel__container">
                    <span className="admin-panel__title">Здравствуйте, {admin.name}!</span>
                </div>
            </>
        )
        :
        (
            <>
                <AdminPanelNavBar />
                <div className="admin-panel__container">
                    <span className="admin-panel__title">ТРЕБУЕТСЯ АВТОРИЗАЦИЯ</span>
                    <form onSubmit={handleSubmitClick} className="login-form">
                        <div className="email__block">
                            <label>EMAIL *</label>
                            <input onChange={changesHandler} name="email" type="text" placeholder="Адрес эл. почты" />
                        </div>
                        <div className="password__block">
                            <label>ПАРОЛЬ *</label>
                            <input onChange={changesHandler} name="password" type={passwordInpType} placeholder="Пароль" />
                            <label><input type="checkbox" onClick={toggleInpType} />Показать пароль</label>
                        </div>
                        <span className="login-form__error">{adminAuthMessage}</span>
                        <button type="submit" className="login-form__btn">Войти</button>
                    </form>
                </div>
            </>
        );
};

export default AdminPanel;