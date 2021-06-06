import React, { useContext, useEffect, useState } from 'react';
import './AdminPanelNews.css'
import { Link, useHistory } from 'react-router-dom';
import { newsContext } from '../../contexts/NewsContext';
import { adminNewsContext } from '../../contexts/AdminNewsContext';

import { CircularProgress, makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AdminPanelNavBar from '../AdminPanelNavBar/AdminPanelNavBar';

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
        if (window.confirm("Удалить новость?")) {
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
            <AdminPanelNavBar />
            <div className="edit-news__container">
                <span className="edit-news__container__title">НОВОСТИ</span>
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
                                                <Link to={`/edit-news/${elem.news_id}`}><EditIcon style={{ margin: 'auto 2vh', cursor: 'pointer', fontSize: '35px' }} /></Link>
                                                <DeleteIcon style={{ margin: 'auto 1vh', color: 'red', cursor: 'pointer', fontSize: '35px' }} onClick={() => handleDeleteBtn(elem.news_id)} />
                                            </div>
                                        </div>
                                    ))
                                }
                                <Pagination className={classes.pagination} page={+page} onChange={handlePage} count={totalPages} />
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