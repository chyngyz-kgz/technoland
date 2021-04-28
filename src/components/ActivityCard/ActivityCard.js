import React from 'react';
import './ActivityCard.css'

const ActivityCard = () => {
    return (
        <div className="card">
            <img className="card__image" src="https://tehnoland.kg/wp-content/uploads/2020/06/thumb11.jpg" alt="card-image" />
            <div className="card__info">
                <p className="card__info__title">Развитие mHealth как инструмент доступа к медицинским услугам</p>
                <p className="card__info__description">Результаты развития проекта “Персональный ЭКГ-телемониторинг” были представлены 26-27 ноября 2019 года на 4-я-ой Региональной сетевой конференция CAREN (CRNC 2019) «Партнерство для будущего научных исследований и высшего образования в Центральной Азии».</p>
            </div>
            <button className="card__more__btn">
                Подробнее
            </button>
        </div>
    );
};

export default ActivityCard;