import React from 'react';
import './NavBar.css'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import headerLogo from '../../assets/images/technoland-logo.png';
import CallIcon from '@material-ui/icons/Call';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="subcontent__navbar__logo">
                    <img className="navbar__logo" src={headerLogo} alt="ОФ Технолэнд" />
                    <Link to="/" className="navbar__text-logo">ОФ ТЕХНОЛЭНД</Link>
                </div>
                <div className="navbar__actions">
                    <span className="navbar__link"><CallIcon />0772-322-652</span>
                    <span className="navbar__link"><WhatsAppIcon />WhatsApp</span>
                    <Link to="/login" className="navbar__login-btn">ВОЙТИ</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;