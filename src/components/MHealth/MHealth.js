import React from 'react';
import caren19 from '../../assets/images/caren_19.png';
import car1 from '../../assets/images/car1.jpg';
import NavBar from '../NavBar/NavBar';

const MHealth = () => {
    return (
        <>
            <NavBar />
            <div className="news-details__container">
                <span className="news-details__title">Развитие mHealth как инструмент доступа к медицинским услугам</span>
                <span className="news-details__title">О РАЗВИТИИ ПРОЕКТА “ПЕРСОНАЛЬНЫЙ ЭКГ МОНИТОРИНГ”</span>
                <img className="news-details__image" src={caren19} alt="Ошибка загрузки изображения" />
                <span className="news-details__description">Результаты развития проекта “Персональный ЭКГ-телемониторинг” были представлены 26-27 ноября 2019 года на 4-я-ой Региональной сетевой конференция CAREN (CRNC 2019) «Партнерство для будущего научных исследований и высшего образования в Центральной Азии». Совместно с Институтом Биоматики Обуда Университета (г. Будапешт, Венгрия) проведена интеграция мобильных ЭКГ-датчиков на сервер ИТ-центра ассоциации КРЕНА для дальнейшего хранения и анализа специалистами кардиолагами.Проект развивается совместно с сотрудниками Национального Института Кардиологии и Терапии им. Мирохимова. Работа была начата в рамках проекта, финансируемого программой EYR-CAREN.</span>
                <span className="news-details__image-description">Ноябрь 27, 2019</span>
                <span className="news-details__title">ОБ АКТУАЛЬНОСТИ РАЗВИТИЯ МОБИЛЬНОЙ ТЕЛЕМЕДИЦИНЫ В КР</span>
                <img className="news-details__image" src={car1} alt="Ошибка загрузки изображения" />
                <span className="news-details__description">На Третьей Региональной сетевой конференция CAREN — CRNC2018 «Центрально азиатская исследовательская и образовательная сеть (CAREN): усиление Евразийского пояса знаний» CRNC является научно-исследовательской сетевой конференцией для Центральной Азии, прошедшей в октябре 2018г. представлены результаты совместной работы.</span>
                <span className="news-details__image-description">Октябрь 23, 2018</span>
            </div>
        </>
    );
};

export default MHealth;