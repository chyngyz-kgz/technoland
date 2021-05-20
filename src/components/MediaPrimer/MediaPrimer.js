import React from 'react';
import NavBar from '../NavBar/NavBar';
import boy from '../../assets/images/boy.png';

const MediaPrimer = () => {
    return (
        <>
            <NavBar />
            <div className="news-details__container">
                <span className="news-details__title">Медиа – букварь дошколенка</span>
                <span className="news-details__title">Предназначен для обучения детей с нарушением слуха</span>
                <span className="news-details__description">Материал подготовлен по проекту «Вовлечение детей с нарушением слуха к системам цифрового обучения», поддержанному Программой Развития ООН в Кыргызстане в рамках конкурса «Вызов Открытым Инновациям — Inno4Kg».</span>
                <img className="news-details__image" src={boy} alt="Ошибка загрузки изображения" />

                <span className="news-details__image-description">Ссылка на сайт: http://technoland-inno4kg.kg/</span>
            </div>
        </>
    );
};

export default MediaPrimer;