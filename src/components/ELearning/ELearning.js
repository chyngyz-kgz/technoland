import React from 'react';
import NavBar from '../NavBar/NavBar';
import elearning from '../../assets/images/elearning.png';

import DateRangeIcon from '@material-ui/icons/DateRange';

const ELearning = () => {
    return (
        <>
            <NavBar />
            <div className="news-details__container">
                <span className="news-details__title">E-learning. Сотрудничество с детскими центрами</span>
                <img className="news-details__image" src={elearning} alt="Ошибка загрузки изображения" />
                <span className="news-details__title">К КОНКУРСУ “ЦИФРОВАЯ ПЕДАГОГИКА”</span>
                <span className="news-details__description">В Кыргызстане стартовал конкурс на лучшее видео-занятие среди учителей средних школ “Цифровая педагогика” Конкурс проводится для признания и популяризации деятельности талантливых учителей, обобщения эффективных практик по использованию современных образовательных технологий и методик, а также для повышения технологической компетентности педагогов. Черновые варианты отсняты, впереди монтаж…</span>
                <span className="news-details__image-description"><DateRangeIcon />Апрель 06, 2020</span>

                <span className="news-details__title">В ПОМОЩЬ УЧИТЕЛЯМ – ОБ ИСПОЛЬЗОВАНИИ ОН-ЛАЙН ИНТЕРАКТИВНЫХ ДОСОК</span>
                <span className="news-details__description">Совместно с технологиями видеоконференц-связей (Zoom, BigBlueButton….) используйте виртуальные интерактивные доски. Пробуйте, не бойтесь, это несложно и очень интересно. Детям понравится…</span>
                <span className="news-details__image-description"><DateRangeIcon />Апрель 04, 2020</span>

                <span className="news-details__title">ПРОВЕДЕНИЕ ЗАНЯТИЙ УЧИТЕЛЯМИ ЦЕНТРА ШАИР НА ПЛАТФОРМЕ ZOOM</span>
                <span className="news-details__description">Для того, чтобы учителя могли познакомиться с наиболее популярными платформами дистанционного обучения предложили протестировать платформу Zoom. Демо версия Zomm позволяет в бесплатном режиме провести занятия с учениками до 30 человек в течении 40 минут. Если Вы используете Zoom только в паре с учеником, то время не ограничивается. Поцедура регистрации на данную платформу может показаться сложной, на первый взгляд. Если Вы испытываете затруднения с регистраций, мы всегда на связи.</span>
                <span className="news-details__image-description"><DateRangeIcon />Апрель 01, 2020</span>

                <span className="news-details__title">ИДУТ ПЕРВЫЕ ОН-ЛАЙН ЗАНЯТИЯ УЧИТЕЛЕЙ ДЕТСКОГО ЦЕНТРА ШАИР</span>
                <span className="news-details__description">В помощь учителям для проведения он-лайн занятий общественный фонд Технолэнд и ассоциация Крена предоставила платформу BigBlueButton и наш фонд проводит техническое сопровождение учителей в их занятиях</span>
                <span className="news-details__image-description"><DateRangeIcon />Март 28, 2020</span>

                <span className="news-details__title">ОБЩЕСТВЕННЫЙ ФОНД “ТЕХНОЛЭНД” И АССОЦИАЦИЯ КРЕНА.</span>
                <span className="news-details__description">Общественный фонд Технолэнд и ассоциация Крена оказывают техническую поддержку и предоставляют свою платформу BigBlueButton для проведения он-лайн занятий ЦДТ “Шайыр балалык” .</span>
                <span className="news-details__image-description"><DateRangeIcon />Март 26, 2020</span>

                <span className="news-details__title">О ПЛАТФОРМЕ BIGBLUEBUTTON</span>
                <span className="news-details__description">Что представляет собой платформа BigBlueButton и как она используется для проведения дистанционных занятий. Для учителей, которые проводят занятия на нашей платформе мы отсняли видеоролик в ознакомительных целях</span>
                <span className="news-details__description">Как зайти на нашу платформу BigBlueButton. Многие учителя испытывают различные трудности, когда впервые пытаются зайти на нашу платформу для проведения он-лайн занятий со своими учениками. Поэтому в помощь учителям предлагаем ознакомиться с нижепредставленным видео-роликом.</span>
                <span className="news-details__image-description"><DateRangeIcon />Март 23, 2020</span>
            </div>
        </>
    );
};

export default ELearning;