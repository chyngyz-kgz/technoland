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
                        <Link to="/materials" className="footer__menu__link">Материалы <br />для скачивания</Link>
                        <Link to="/admin_panel" className="footer__menu__link">Админ-панель</Link>
                    </div>
                    <div className="footer__menu__block">
                        <span className="footer__menu__title">КАК СВЯЗАТЬСЯ?</span>
                        <Link to="/contacts" className="footer__menu__link">Контакты</Link>
                        <Link to="/contacts" className="footer__menu__link">Обратная связь</Link>
                        <a href="https://wa.me/+996722322652?text=Здравствуйте, пишу с сайта Technoland-pf.kg!"><span className="footer__menu__link"><WhatsAppIcon />WhatsApp</span></a>
                        <a href="tel:+996-772-322-652"><span className="footer__menu__link"><CallIcon />0772-322-652</span></a>
                    </div>
                    <div className="footer__menu__block">
                        <span className="footer__menu__title">НОВОСТИ</span>
                        <Link to="/news"><span className="footer__menu__link">Лента</span></Link>
                        <Link to="/favourite-news"><span className="footer__menu__link">Избранное</span></Link>
                    </div>
                    <div className="footer__menu__block">
                        <span className="footer__menu__title">МЫ В СОЦСЕТЯХ</span>
                        <a target="_blank" href="https://www.facebook.com/technoland.telematics/"><span className="footer__menu__link"><FacebookIcon /> facebook</span></a>
                        <a target="_blank" href="https://www.instagram.com/of_technoland/"><span className="footer__menu__link"><InstagramIcon /> instagram</span></a>
                        <a target="_blank"><span className="footer__menu__link"><YouTubeIcon /> youtube</span></a>
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