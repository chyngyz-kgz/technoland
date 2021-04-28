import React from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import './Activities.css'

const Activities = () => {
    return (
        <div className="activities__wrapper">
            <div className="activities__container">
                <span>Основные направления нашей деятельности</span>
                <div className="activities__container__cards">
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                </div>
            </div>
        </div>
    );
};

export default Activities;