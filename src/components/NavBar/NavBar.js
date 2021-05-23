import React, { useContext, useState } from 'react';
import './NavBar.css'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import headerLogo from '../../assets/images/technoland-logo.png';
import CallIcon from '@material-ui/icons/Call';
import { Link, useHistory } from 'react-router-dom';
import { newsContext } from '../../contexts/NewsContext';
import { authContext } from '../../contexts/AuthContext';

const NavBar = () => {

    const [searchValue, setSearchValue] = useState('');
    const { getNews } = useContext(newsContext);
    const { isAuth, logoutUser } = useContext(authContext);
    const history = useHistory();

    function handleSearchValueChange(event) {
        setSearchValue(event.target.value);
        const search = new URLSearchParams(history.location.search);
        search.set("search", event.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getNews();
    }

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="subcontent__navbar__logo">
                    <img className="navbar__logo" src={headerLogo} alt="ОФ Технолэнд" />
                    <Link to="/" className="navbar__text-logo">ОФ ТЕХНОЛЭНД</Link>
                </div>
                <div className="navbar__actions">
                    {
                        window.location.pathname === '/news' || window.location.pathname === '/admin-panel-news' ?
                            <input onChange={handleSearchValueChange} value={searchValue} className="navbar__search-inp" placeholder="Поиск новостей" />
                            :
                            ''
                    }
                    <span className="navbar__link"><CallIcon />0772-322-652</span>
                    <span className="navbar__link"><WhatsAppIcon />WhatsApp</span>
                    {
                        isAuth ?
                            <span onClick={() => logoutUser(history)} className="navbar__login-btn">Выйти</span>
                            :
                            <Link to="/login" className="navbar__login-btn">Войти</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;