import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { authContext } from '../../contexts/AuthContext';
import './Materials.css';
import NavBar from '../NavBar/NavBar';
import { materialsContext } from '../../contexts/MateriasContext';
import GetAppIcon from '@material-ui/icons/GetApp';
import DownloadLink from "react-download-link";

const Materials = () => {

    const { isUserLogedIn } = useContext(authContext);
    const { getMaterials, materials, totalPages } = useContext(materialsContext);
    const history = useHistory();

    useEffect(() => {
        isUserLogedIn(history);
        getMaterials();
    }, []);

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
                                        <span className="download__item__description">{elem.material_description}</span>
                                        <a href={elem.material_pathname} target="_blank" rel="noopener noreferrer" download>
                                            <button><DownloadLink
                                                style={{
                                                    textDecoration: "none",
                                                    height: "100%",
                                                    width: "100%",
                                                    color: "white"
                                                }}
                                                label="Скачать"
                                                filename={elem.material_name}
                                                exportFile={() => "Client side cache data here…"}
                                            /> <GetAppIcon /></button>
                                        </a>
                                    </div>
                                ))
                            )
                            :
                            'Материалы отсутсвуют'
                    }
                </div>
            </div>
        </>
    );
};

export default Materials;