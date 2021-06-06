import React, { useContext, useEffect, useState } from 'react';
import './FavouriteNews.css'
import NavBar from '../NavBar/NavBar';
import NewsCard from '../NewsCard/NewsCard'
import { newsContext } from '../../contexts/NewsContext';

import { CircularProgress, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';

const FavouriteNews = () => {
    const { favourites, getFavourites } = useContext(newsContext);
    const history = useHistory();

    useEffect(() => {
        getFavourites();
    }, []);

    return (
        <>
            <NavBar />

            <div className="news__container">
                <span className="news__title">ИЗБРАННЫЕ НОВОСТИ</span>
                {
                    favourites?.length ?
                        (
                            <>
                                {
                                    favourites.map(elem => (
                                        <NewsCard key={elem.news_id} image={elem.image} id={elem.news_id} title={elem.title} description={elem.description.slice(0, 300) + '...'} date={elem.date} />
                                    ))
                                }
                            </>
                        )
                        :
                        (
                            <div className="progress__container">
                                <span className="news__title">Избранные новости отсутвуют</span>
                            </div>
                        )
                }
            </div>
        </>
    );
};

export default FavouriteNews;