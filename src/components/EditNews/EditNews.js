import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const EditNews = () => {
    return (
        <>
            <NavBar />
            <div className="admin-panel__container">
                <Link to="add-event"><span className="admin-panel__btn">ДОБАВИТЬ НОВОСТЬ</span></Link>
            </div>
        </>
    );
};

export default EditNews;