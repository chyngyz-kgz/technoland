import React, { useState } from 'react';
import './StickyNavBar.css'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import headerLogo from '../../assets/images/technoland-logo.png';
import CallIcon from '@material-ui/icons/Call';
import { Link } from 'react-router-dom';

const StickyNavBar = () => {
    let [navBar, setNavBar] = useState(false);

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
                    <Link to="/login" className="stycky-navbar__login-btn">ВОЙТИ</Link>
                </div>
            </div>
        </div>
    ) : '';
};

export default StickyNavBar;