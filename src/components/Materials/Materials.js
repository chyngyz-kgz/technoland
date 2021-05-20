import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { authContext } from '../../contexts/AuthContext';
import './Materials.css';
import NavBar from '../NavBar/NavBar';
import { materialsContext } from '../../contexts/MateriasContext';

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
                {
                    materials ?
                        (
                            materials.materials.map(elem => (
                                <a key={elem.material_pathname} href={elem.material_pathname} download>{elem.material_description}</a>
                            ))
                        )
                        :
                        'Материалы отсутсвуют'
                }
            </div>
        </>
    );
};

export default Materials;