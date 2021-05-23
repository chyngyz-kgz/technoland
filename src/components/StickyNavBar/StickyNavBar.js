import React, { useContext, useState } from 'react';
import './StickyNavBar.css'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import headerLogo from '../../assets/images/technoland-logo.png';
import CallIcon from '@material-ui/icons/Call';
import { Link, useHistory } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';

const StickyNavBar = () => {
    const { isAuth, logoutUser } = useContext(authContext);
    let [navBar, setNavBar] = useState(false);
    const history = useHistory();

    function handleScroll() {
        if (window.pageYOffset > 140) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }
    window.addEventListener('scroll', handleScroll);

    return navBar ? (
        <div className="stycky-navbar">
            <div className="stycky-navbar__container">
                <div className="subcontent__navbar__logo">
                    <img className="navbar__logo" src={headerLogo} alt="ОФ Технолэнд" />
                    <span className="stycky-navbar__text-logo">ОФ ТЕХНОЛЭНД</span>
                </div>
                <div className="stycky-navbar__actions">
                    <span className="stycky-navbar__link"><CallIcon />0772-322-652</span>
                    <span className="stycky-navbar__link"><WhatsAppIcon />WhatsApp</span>
                    {
                        isAuth ?
                            <span onClick={() => logoutUser(history)} className="stycky-navbar__login-btn">Выйти</span>
                            :
                            <Link to="/login" className="stycky-navbar__login-btn">Войти</Link>
                    }
                </div>
            </div>
        </div>
    ) : '';
};

export default StickyNavBar;