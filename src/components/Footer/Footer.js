import React from 'react';
import './Footer.css'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__menu">
                    <div className="footer__menu__block">
                        <span className="footer__menu__title">ОФ ТЕХНОЛЭНД</span>
                        <Link to="/about" className="footer__menu__link">О нас</Link>
                        <Link to="/partners" className="footer__menu__link">Наши партнеры</Link>
                    </div>
                    <div className="footer__menu__block">
                        <span className="footer__menu__title">КАК СВЯЗАТЬСЯ?</span>
                        <Link to="/contacts" className="footer__menu__link">Контакты</Link>
                        <Link to="/contacts" className="footer__menu__link">Обратная связь</Link>
                        <span className="footer__menu__link"><WhatsAppIcon />WhatsApp</span>
                        <span className="footer__menu__link"><CallIcon />0772-322-652</span>
                    </div>
                    <div className="footer__menu__block">
                        <span className="footer__menu__title">НОВОСТИ</span>
                        <span className="footer__menu__link">Лента</span>
                        <Link to="favourite-news"><span className="footer__menu__link">Избранное</span></Link>
                    </div>
                    <div className="footer__menu__block">
                        <span className="footer__menu__title">МЫ В СОЦСЕТЯХ</span>
                        <span className="footer__menu__link"><FacebookIcon /> facebook</span>
                        <span className="footer__menu__link"><InstagramIcon /> instagram</span>
                        <span className="footer__menu__link"><YouTubeIcon /> youtube</span>
                    </div>
                </div>
                <div className="footer__horizontal-line"></div>
                <div className="footer__info__blick">
                    <p className="footer__info__block__text">
                        © 2021 | Кыргызстан, г.Бишкек
                        ул. Туголбай Ата 67/123 | Общественный фонд «Технолэнд» создан в соответствии с Конституцией Кыргызской Республики, Гражданским кодексом Кыргызской Республики, Законом Кыргызской Республики «О некоммерческих организациях» и другими нормативными правовыми актами Кыргызской Республики.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;