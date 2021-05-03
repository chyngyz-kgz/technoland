import React, { useContext } from 'react';
import './Header.css';

import headerVideo from '../../assets/videos/deaf.mp4';
import headerLogo from '../../assets/images/technoland-logo.png';
import { useHistory } from 'react-router';
import Video from 'react-responsive-video';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';

const Header = () => {
    const history = useHistory();
    const { isAuth } = useContext(authContext);

    function handleLoginBtn() {
        history.push("/login");
    }

    return (
        <div className="header">

            <Video
                className="video"
                mp4={headerVideo}
                objectFit={`cover`}
            />
            {/* <video className="video" autoPlay="autoplay" loop="loop" muted>
                <source src={headerVideo} type="video/mp4" />
            </video> */}

            <div className="content">
                <div className="subcontent__navbar">
                    <div className="subcontent__navbar__logo">
                        <img className="navbar__logo" src={headerLogo} alt="ОФ Технолэнд" />
                        <span className="navbar__logo__title">ОФ ТЕХНОЛЭНД</span>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">ГЛАВНАЯ</Link>
                        </li>
                        <li>
                            <Link to="/about">О НАС</Link>
                        </li>
                        <li>
                            <Link to="/news">НОВОСТИ</Link>
                        </li>
                        <li>
                            <Link to="/contacts">КОНТАКТЫ</Link>
                        </li>
                        <li>
                            <Link to="/partners">НАШИ ПАРТНЕРЫ</Link>
                        </li>
                    </ul>
                    <Link to="/login">
                        {isAuth ? (
                            <button className="sign-in-btn">
                                <span>ВЫЙТИ</span>
                            </button>
                        ) : (
                            <button className="sign-in-btn">
                                <span>ВОЙТИ</span>
                            </button>
                        )}
                    </Link>
                </div>
                <div className="subcontent">
                    <p className="subcontent__title">Мы верим в мир, в котором каждый ребёнок имеет доступ к образованию.</p>
                    <p className="subcontent__description">В Кыргызстане детям с инвалидностью нередко отказывают в качественном инклюзивном образовании. Они вынуждены проходить дискриминационное обследование в государственных организациях, заключение которых часто приводит к сегрегации ребенка в спецшколе или дома, несмотря на то, что в 2019 году Кыргызстан ратифицировал Конвенцию о правах инвалидов.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;