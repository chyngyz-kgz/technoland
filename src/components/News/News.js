import React, { useContext, useEffect, useState } from 'react';
import './News.css'
import NavBar from '../NavBar/NavBar';
import NewsCard from '../NewsCard/NewsCard'
import { newsContext } from '../../contexts/NewsContext';

import { CircularProgress, makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({

    pagination: {
        color: "#c4ab9d",
        // margin: 'auto',
        // padding: 'auto'
    }
}));

const News = () => {
    const { getNews, news, totalPages } = useContext(newsContext);
    const history = useHistory();
    const [page, setPage] = useState(getPage());
    const classes = useStyles();

    useEffect(() => {
        getNews();
    }, []);

    function getPage() {
        const search = new URLSearchParams(history.location.search);
        return search.get("page") ? search.get("page") : 1;
    }

    function handlePage(event, page) {
        const search = new URLSearchParams(history.location.search);
        search.set("page", page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getNews();
        setPage(page);
    }

    return (
        <>
            <NavBar />

            <div className="news__container">
                <span className="news__title">НОВОСТИ</span>
                {
                    news ?
                        (
                            <>
                                {
                                    news.news.map(elem => (
                                        <NewsCard key={elem.news_id} image={elem.image} id={elem.news_id} title={elem.title} description={elem.description.slice(0, 300) + '...'} date={elem.date} />
                                    ))
                                }
                                <Pagination className={classes.pagination} page={+page} onChange={handlePage} count={totalPages} />
                            </>
                        )
                        :
                        (
                            <div className="progress__container">
                                <CircularProgress />
                            </div>
                        )
                }
            </div>
        </>
    );
};

export default News;