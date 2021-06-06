import React from "react";
import './SideBar.css'
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
    return (
        <Menu {...props}>
            <Link className="menu-item" to="/">ГЛАВНАЯ</Link>
            <Link className="menu-item" to="/about">О НАС</Link>
            <Link className="menu-item" to="/news">НОВОСТИ</Link>
            <Link className="menu-item" to="/contacts">КОНТАКТЫ</Link>
            <Link className="menu-item" to="/partners">НАШИ ПАРТНЕРЫ</Link>
        </Menu>
    );
};