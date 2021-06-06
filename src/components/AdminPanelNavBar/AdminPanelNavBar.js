import React, { useContext, useState } from 'react';
import './AdminPanelNavBar.css';
import headerLogo from '../../assets/images/technoland-logo.png';
import { Link, useHistory } from 'react-router-dom';
import { newsContext } from '../../contexts/NewsContext';
import { adminAuthContext } from '../../contexts/AdminAuthContext';

import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GetAppIcon from '@material-ui/icons/GetApp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const AdminPanelNavBar = () => {

    const [searchValue, setSearchValue] = useState('');
    const { getNews } = useContext(newsContext);
    const { admin, logoutAdmin } = useContext(adminAuthContext);
    const history = useHistory();

    function handleSearchValueChange(event) {
        setSearchValue(event.target.value);
        const search = new URLSearchParams(history.location.search);
        search.set("search", event.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getNews();
    }

    return (
        <div className="admin-panel__navbar">
            <div className="admin-panel__navbar__container">
                <div className="subcontent__navbar__logo">
                    <img className="navbar__logo" src={headerLogo} alt="ОФ Технолэнд" />
                    <Link to="/" className="navbar__text-logo">ОФ ТЕХНОЛЭНД</Link>
                </div>
                <div className="admin-panel__navbar__actions">
                    {
                        window.location.pathname === '/news' || window.location.pathname === '/admin-panel-news' ?
                            <input onChange={handleSearchValueChange} value={searchValue} className="admin-panel__navbar__search-inp" placeholder="Поиск новостей" />
                            :
                            ''
                    }
                    {
                        admin ?
                            <>
                                <Link to="/admin-panel-news" className="admin-panel__navbar-btn"><EventAvailableIcon /> НОВОСТИ</Link>
                                <Link to="/edit-materials" className="admin-panel__navbar-btn"><GetAppIcon />МАТЕРИАЛЫ</Link>
                                <Link to="/edit-users" className="admin-panel__navbar-btn"><PeopleAltIcon />ПОЛЬЗОВАТЕЛИ</Link>
                                <span onClick={() => logoutAdmin()} className="admin-panel__navbar__login-btn">Выйти</span>
                            </>
                            :
                            <Link to="/admin_panel" className="admin-panel__navbar__login-btn">Войти</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminPanelNavBar;