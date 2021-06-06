import React, { useState } from 'react';
import './Contacts.css'
import NavBar from '../NavBar/NavBar';
import { SEND_MAIL_API } from '../../helpers/constants';

import CallIcon from '@material-ui/icons/Call';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import axios from 'axios';

const Contacts = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [statusMessage, setStatusMessage] = useState('');

    function changesHandler(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    async function sendFormData(event) {
        event.preventDefault();
        const { data } = await axios.post(SEND_MAIL_API, formData);
        setStatusMessage(data.message);
        console.log(data);
    }

    return (
        <>
            <NavBar />
            <div className="contacts__container">
                <span className="contacts-us__title">СВЯЖИТЕСЬ С НАМИ</span>
                <span className="contact__title">НАШИ КОНТАКТЫ</span>
                <span className="contact__info">Кыргызская Республика, г. Бишкек</span>
                <span className="contact__info">ул. Туголбай Ата 67/123</span>
                <span className="contact__info"><CallIcon />+996 312 469 320</span>
                <span className="contact__info"><AlternateEmailIcon />technolandpf@gmail.com</span>

                <span className="contact__title">Председатель общественного фонда</span>
                <span className="contact__info">Султангазиева Р.Т.</span>
                <span className="contact__info"><CallIcon /> +996 772 322 652</span>
                <span className="contact__info"><AlternateEmailIcon /> renasultangazieva@gmail.com</span>

                <span className="contact__title">Координатор</span>
                <span className="contact__info">Турдалиева А.А.</span>
                <span className="contact__info"><CallIcon /> +996 778 810 250</span>
                <span className="contact__info"><AlternateEmailIcon /> aizada7878@mail.ru</span>


                <form onSubmit={sendFormData} className="contacts__form">
                    <span className="form__title">ОБРАТНАЯ СВЯЗЬ</span>
                    <div className="form__inputs">
                        <div className="form__input__container">
                            <label>Введите ваше имя *</label>
                            <input onChange={changesHandler} name="name" className="form__input" placeholder="Пример: Асанов Усон" />
                        </div>
                        <div className="form__input__container">
                            <label>Введите ваш email *</label>
                            <input onChange={changesHandler} name="email" className="form__input" placeholder="example@example.com" />
                        </div>
                    </div>
                    <div className="form__textarea__container">
                        <label>Введите сообщение *</label>
                        <textarea onChange={changesHandler} name="message" className="form__textarea" placeholder="Введите сообщение от 20 до 500 символов" />
                    </div>
                    <span className="contact-form__error">{statusMessage}</span>
                    <button className="form__submit-btn" type="submit">Отправить сообщение</button>
                </form>
            </div>
        </>
    );
};

export default Contacts;