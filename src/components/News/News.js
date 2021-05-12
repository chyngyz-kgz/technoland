import React, { useContext, useEffect, useState } from 'react';
import './News.css'
import NavBar from '../NavBar/NavBar';
import NewsCard from '../NewsCard/NewsCard'
import { newsContext } from '../../contexts/NewsContext';

import { CircularProgress, FormControlLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({

    pagination: {
        // margin: 'auto',
        // padding: 'auto'
    }
}));

const News = () => {
    const { getNews, news, totalPages } = useContext(newsContext);
    const history = useHistory();
    const [page, setPage] = useState(getPage());
    const classes = useStyles();
    const [newsType, setNewsType] = useState();

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

    function handleChangeNewsType(event) {
        if (event.target.value === "Все") {
            history.push(`${history.location.pathname.replace("category")}`);
            getNews();
            return;
        }
        const search = new URLSearchParams(history.location.search);
        search.set("category", event.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getNews();
        setNewsType(event.target.value);
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
                                        <NewsCard key={elem.news_id} image={elem.image} id={elem.news_id} title={elem.title} description={elem.description.slice(0, 300) + '...'} />
                                    ))
                                }
                                <RadioGroup
                                    value={newsType}
                                    onChange={handleChangeNewsType}
                                    aria-label="newstype"
                                    name="newstype"
                                >
                                    <FormControlLabel
                                        value="Образование"
                                        control={<Radio />}
                                        label="Образование"
                                    />
                                    <FormControlLabel
                                        value="Политика"
                                        control={<Radio />}
                                        label="Политика"
                                    />
                                    <FormControlLabel
                                        value="Все"
                                        control={<Radio />}
                                        label="Все"
                                    />
                                </RadioGroup>
                                <Pagination className={classes.pagination} page={+page} onChange={handlePage} count={totalPages} color="#c4ab9d" />
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