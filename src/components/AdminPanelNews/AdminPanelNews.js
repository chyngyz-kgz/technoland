import React, { useContext, useEffect, useState } from 'react';
import './AdminPanelNews.css'
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { newsContext } from '../../contexts/NewsContext';
import { adminNewsContext } from '../../contexts/AdminNewsContext';

import { CircularProgress, makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({

    pagination: {
        marginTop: '5vh',
        // padding: 'auto'
    }
}));

const AdminPanelNews = () => {

    const history = useHistory();
    const { getNews, news, totalPages } = useContext(newsContext);
    const { deleteEvent } = useContext(adminNewsContext);
    const [page, setPage] = useState(getPage());
    const classes = useStyles();

    useEffect(() => {
        getNews();
    }, []);

    function handleDeleteBtn(id) {
        if (window.confirm("Удалить нвость?")) {
            deleteEvent(id);
        }
    }

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
            <div className="edit-news__container">
                <Link to="add-event"><span className="admin-panel__btn">ДОБАВИТЬ НОВОСТЬ</span></Link>

                {
                    news ?
                        (
                            <div className="news__block">
                                {
                                    news.news.map(elem => (

                                        <div key={elem.news_id} className="news__block__item">
                                            <img src={elem.image} />
                                            <span className="news__block__item__title">{elem.title}</span>
                                            <span className="news__block__item__desc">{elem.description.slice(0, 150) + '...'}</span>
                                            <div className="news__block__item__btns">
                                                <span className="news__block__item__edit-btn"><Link to={`/edit-news/${elem.news_id}`}>ИЗМЕНИТЬ</Link></span>
                                                <span onClick={() => handleDeleteBtn(elem.news_id)} className="news__block__item__delete-btn">УДАЛИТЬ</span>
                                            </div>
                                        </div>
                                    ))
                                }
                                <Pagination className={classes.pagination} page={+page} onChange={handlePage} count={totalPages} color="#c4ab9d" />
                            </div>
                        )
                        :
                        <CircularProgress />
                }
            </div>
        </>
    );
};

export default AdminPanelNews;