import React, { useContext, useEffect, useState } from 'react';
import './AdminPanel.css'
import NavBar from '../NavBar/NavBar';
import { adminAuthContext } from '../../contexts/AdminAuthContext';
import { Link } from 'react-router-dom';

const AdminPanel = () => {

    const { isAdminLogedIn, loginAdmin, admin } = useContext(adminAuthContext);

    const initialState = {
        adminData: {
            email: '',
            password: ''
        },
        errorMsg: '',
        successMsg: ''
    }
    const [state, setState] = useState(initialState);


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
        loginAdmin(state.adminData);
    }

    return admin ?
        (
            <>
                <NavBar />
                <div className="admin-panel__container">
                    <span className="admin-panel__title">Здравствуйте, {admin.name}</span>
                    <div className="btns-container">
                        <Link to="admin-panel-news"><span className="admin-panel__btn">НОВОСТИ</span></Link>
                        <Link to="edit-materials"><span className="admin-panel__btn">МАТЕРИАЛЫ ДЛЯ СКАЧИВАНИЯ</span></Link>
                    </div>
                </div>
            </>
        )
        :
        (
            <>
                <NavBar />
                <div className="admin-panel__container">
                    <span className="admin-panel__title">ТРЕБУЕТСЯ АВТОРИЗАЦИЯ</span>
                    <form onSubmit={handleSubmitClick} className="login-form">
                        <div className="email__block">
                            <label>email *</label>
                            <input onChange={changesHandler} name="email" type="text" placeholder="Адрес эл. почты" />
                        </div>
                        <div className="password__block">
                            <label>ПАРОЛЬ *</label>
                            <input onChange={changesHandler} name="password" type="password" placeholder="Пароль" />
                        </div>
                        <button type="submit" className="login-form__btn">Войти</button>
                    </form>
                </div>
            </>
        );
};

export default AdminPanel;