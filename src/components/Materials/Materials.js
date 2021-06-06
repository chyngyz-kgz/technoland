import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { authContext } from '../../contexts/AuthContext';
import './Materials.css';
import NavBar from '../NavBar/NavBar';
import { materialsContext } from '../../contexts/MateriasContext';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileSaver from 'file-saver';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({

    pagination: {
        color: "#c4ab9d",
        // margin: 'auto',
        // padding: 'auto'
    }
}));

const Materials = () => {

    const { isUserLogedIn } = useContext(authContext);
    const { getMaterials, materials, totalPages } = useContext(materialsContext);
    const history = useHistory();
    const [page, setPage] = useState(getPage());
    const classes = useStyles();

    useEffect(() => {
        isUserLogedIn(history);
        getMaterials();
    }, []);

    function getPage() {
        const search = new URLSearchParams(history.location.search);
        return search.get("page") ? search.get("page") : 1;
    }

    function handlePage(event, page) {
        const search = new URLSearchParams(history.location.search);
        search.set("page", page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getMaterials();
        setPage(page);
    }

    const saveFile = (url, fileName) => {
        FileSaver.saveAs(
            url,
            fileName
        );
    };

    return (
        <>
            <NavBar />
            <div className="news__container">
                <span className="news__title">МАТЕРИАЛЫ ДЛЯ СКАЧИВАНИЯ</span>
                <div className="download">
                    {
                        materials ?
                            (
                                materials.materials.map(elem => (
                                    <div key={elem.material_pathname} className="download__item">
                                        <span className="download__item__title">{elem.material_title}</span>
                                        <img className="download__item__image" src={elem.material_image} alt="" />
                                        <span className="download__item__name">{elem.material_name}</span>
                                        <span className="download__item__description">{elem.material_description}</span>
                                        <button onClick={() => saveFile(elem.material_pathname, elem.material_title)}>Скачать <GetAppIcon /></button>
                                    </div>
                                ))
                            )
                            :
                            'Материалы отсутствуют'
                    }
                </div>
                {
                    materials ?
                        <Pagination className={classes.pagination} page={+page} onChange={handlePage} count={totalPages} />
                        :
                        ''
                }
            </div>
        </>
    );
};

export default Materials;