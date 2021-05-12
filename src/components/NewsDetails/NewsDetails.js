import React, { useContext, useEffect, useState } from 'react';
import './NewsDetails.css'
import { CircularProgress, TextField } from '@material-ui/core';
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { newsContext } from '../../contexts/NewsContext';
import NavBar from '../NavBar/NavBar';

const NewsDetails = (props) => {

    const { getNewsDetails, newsDetails, addComment, newsComments } = useContext(newsContext);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        getNewsDetails(props.match.params.id);
    }, []);

    function handleInpChange(event) {
        setInputValue(event.target.value);

    }

    return (
        <>
            <NavBar />
            <div className="news-details__container">
                {
                    newsDetails ? (
                        <>
                            <span className="news-details__title">{newsDetails.title}</span>
                            <span className="news-details__description">{newsDetails.description}</span>
                            <img className="news-details__image" src={newsDetails.image} alt={newsDetails.title} />
                            <span className="news-details__title">{newsDetails.subTitle}</span>
                            <span className="news-details__description">{newsDetails.additionalDescription}</span>
                            <img className="news-details__image" src={newsDetails.additionalImage} alt={newsDetails.title} />
                            <div className="news-details__comments-block">
                                <div style={{ padding: 14 }} className="App">
                                    <h1>Комментарии:</h1>
                                    {
                                        newsComments ? newsComments.map(elem => (
                                            <Paper style={{ padding: "40px 20px" }}>
                                                <Grid container wrap="nowrap" spacing={2}>
                                                    <Grid item>
                                                        <Avatar alt="Remy Sharp" />
                                                    </Grid>
                                                    <Grid justifyContent="left" item xs zeroMinWidth>
                                                        <h4 style={{ margin: 0, textAlign: "left" }}>Some User</h4>
                                                        <p style={{ textAlign: "left" }}>
                                                            {elem}
                                                        </p>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        ))
                                            :
                                            ''
                                    }
                                    <div className="comments-actions">
                                        <TextField onChange={handleInpChange} value={inputValue} id="standard-basic" label="Оставить комментарий" />
                                        <span onClick={() => addComment(newsDetails.news_id, inputValue)} style={{ width: "20vw", textAlign: "center" }} className="admin-panel__btn">Отправить</span>
                                    </div>
                                </div>
                            </div>
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