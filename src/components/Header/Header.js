import React, { useContext, useState, useEffect } from 'react';
import './Header.css';
import headerVideo from '../../assets/videos/deaf.mp4';
import headerLogo from '../../assets/images/technoland-logo.png';
import { useHistory } from 'react-router';
import Video from 'react-responsive-video';
import DilgirimLogo from '../../assets/images/dilgirim-logo.png';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import SideBar from '../SideBar/SideBar';

const Header = () => {
    const history = useHistory();
    const { isAuth, loginUser, isUserLogedIn, logoutUser, authMessage } = useContext(authContext);
    const [passwordInpType, setpasswordInpType] = useState("password");

    useEffect(() => {
        isUserLogedIn();
    }, []);

    const initialState = {
        userData: {
            email: '',
            password: ''
        },
        errorMsg: '',
        successMsg: ''
    }

    const [state, setState] = useState(initialState);

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

    function myFunction(event) {
        event.preventDefault();
        let x = document.getElementById("myTopnav");
        if (x.className === "subcontent__navbar") {
            x.className += " responsive";
        } else {
            x.className = "subcontent__navbar";
        }
    }

    function toggleInpType() {
        passwordInpType === "password" ? setpasswordInpType("text") : setpasswordInpType("password");
    }

    return (
        <div className="header">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

            <Video
                className="video"
                mp4={headerVideo}
                objectFit={`cover`}
            />

            <div className="content">
                <div className="subcontent__navbar" id="myTopnav">
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
                    {
                        isAuth ?
                            <span onClick={() => logoutUser(history)} className="navbar__log-in-out-btn">
                                <button className="sign-in-btn">
                                    <span>ВЫЙТИ</span>
                                </button>
                            </span>
                            :
                            <Link className="navbar__log-in-out-btn" to="/login">
                                <button className="sign-in-btn">
                                    <span>ВОЙТИ</span>
                                </button>
                            </Link>
                    }
                </div>
                <div className="subcontent">
                    <div className="subcontent__text-block">
                        <p className="subcontent__title">Мы верим в мир, в котором каждый ребёнок имеет доступ к образованию.</p>
                        <p className="subcontent__description">В Кыргызстане детям с ограниченными возможностями здоровья нередко отказывают в предоставлении качественного инклюзивного образования вопреки тому, что в 2019 году Кыргызстан ратифицировал Конвенцию о правах инвалидов.</p>
                    </div>
                    {
                        !isAuth ?
                            <div className="subcontent__login-block">
                                <form onSubmit={handleSubmitClick} className="subcontent__login-form">
                                    <span className="subcontent__login-form__title">Материалы для скачивания</span>
                                    <span className="subcontent__login-form__description">Для доступа к учебным материалам требуется авторизация</span>
                                    <div className="subcontent__email-block">
                                        <label>Эл. почта</label>
                                        <input onChange={changesHandler} name="email" type="text" className="subcontent__login-inp" placeholder="Адрес эл. почты" />
                                    </div>
                                    <div className="subcontent__password-block">
                                        <label>Пароль</label>
                                        <input onChange={changesHandler} name="password" type={passwordInpType} className="subcontent__password-inp" placeholder="Пароль" />
                                    </div>
                                    <div className="subcontent__checkbox-block">
                                        <input type="checkbox" onClick={toggleInpType} />
                                        <label>Показать пароль</label>
                                    </div>
                                    <span className="subcontent__login-form__error">{authMessage}</span>
                                    <button type="submit" className="subcontent__login-form__button">Войти</button>
                                </form>
                            </div>
                            :
                            <div className="subcontent__promo-block">
                                {/* <img src={DilgirimLogo} alt="Дилгирим" /> */}

                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;