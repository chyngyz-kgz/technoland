import React, { useContext, useEffect } from 'react';
import './NewsDetails.css'
import { CircularProgress, TextField } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { newsContext } from '../../contexts/NewsContext';
import NavBar from '../NavBar/NavBar';

const NewsDetails = (props) => {

    const { getNewsDetails, newsDetails } = useContext(newsContext);

    useEffect(() => {
        getNewsDetails(props.match.params.id);
    }, []);

    return (
        <>
            <NavBar />
            <div className="news-details__container">
                {
                    newsDetails ? (
                        <>
                            <span className="news-details__title">{newsDetails.title}</span>
                            <span className="news-details__date"><AccessTimeIcon style={{ fontSize: 30, color: 'orange', marginRight: '2px' }} /> {newsDetails.date}</span>
                            <pre className="news-details__description">{newsDetails.description}</pre>
                            <img className="news-details__image" src={newsDetails.image} alt={newsDetails.title} />
                            <span className="news-details__title">{newsDetails.subTitle}</span>
                            <pre className="news-details__description">{newsDetails.additionalDescription}</pre>
                            <img className="news-details__image" src={newsDetails.additionalImage} alt={newsDetails.title} />
                        </>
                    )
                        :
                        (
                            <CircularProgress />
                        )
                }
            </div>
        </>
    );
};

export default NewsDetails;