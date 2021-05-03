import React, { useContext, useEffect } from 'react';
import './Home.css'
import Activities from '../Activities/Activities';
import Header from '../Header/Header';
import StickyNavBar from '../StickyNavBar/StickyNavBar';

const Home = () => {

    return (
        <>
            <StickyNavBar />
            <Header />
            <div className="our-mission">
                <div className="our-mission__container">
                    <h1>ЦЕЛИ И ЗАДАЧИ ФОНДА</h1>
                    <div className="our-tasks__section">
                        <div className="our-task__block">
                            <span>Содействие развитию потенциала в области ИКТ для достижения целей Устойчивого развития.</span>
                        </div>
                        <div className="our-task__block">
                            <span>Содействие доступности ИКТ и их использованию для социально-экономического развития лиц с учетом их особых потребностей во всех сферах деятельности.</span>
                        </div>
                        <div className="our-task__block">
                            <span>Продвижение ИКТ технологий, повышающих качество жизни социально уязвимых слоев населения путем внедрения отзывчивых политик, программ и услуг.</span>
                        </div>
                        <div className="our-task__block">
                            <span>Повышение уровня знания населения в области ИКТ.</span>
                        </div>
                    </div>
                    <span className="our-mission__more-btn">ПОДРОБНЕЕ</span>
                </div>
            </div>
            <Activities />
        </>
    );
};

export default Home;