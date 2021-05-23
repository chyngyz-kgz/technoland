import './EditMaterials.css';
import React, { useContext, useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { adminMaterialsContext } from '../../contexts/AdminMaterialsContext';
import { materialsContext } from '../../contexts/MateriasContext';
import DeleteIcon from '@material-ui/icons/Delete';
import { adminAuthContext } from '../../contexts/AdminAuthContext';

const EditMaterials = () => {
    const [selectedFile, setSelectedFile] = useState();
    const { isAdminLogedIn } = useContext(adminAuthContext);
    const { uploadFile, progress } = useContext(adminMaterialsContext);
    const { getMaterials, materials, totalPages } = useContext(materialsContext);
    const [addingMaterial, setAddingMaterial] = useState(false);
    const [inpData, setInpData] = useState({ title: '', description: '' })


    useEffect(() => {
        isAdminLogedIn();
        getMaterials();
    }, []);

    function onFileChange(event) {
        setSelectedFile(event.target.files[0]);
    }

    function handleInpChanges(event) {
        setInpData({
            ...inpData,
            [event.target.name]: event.target.value
        });
    }

    async function onFileUpload() {
        const formData = new FormData();

        formData.append(
            'newFile',
            selectedFile,
            selectedFile.name
        );

        formData.append(
            'title',
            inpData.title
        );

        formData.append(
            'description',
            inpData.description
        );

        console.log(selectedFile);

        uploadFile(formData);
    }

    return (
        <>
            <NavBar />
            <div className="news__container">
                <span className="news__title">МАТЕРИАЛЫ ДЛЯ СКАЧИВАНИЯ</span>
                {
                    addingMaterial ?
                        <form onSubmit={(event) => event.preventDefault()} className="add-material__form">
                            <label className="add-material__form__title">Выберите файл для загрузки</label>

                            <label className="add-material__form__label">Название материала *</label>
                            <input name="title" onChange={handleInpChanges} value={inpData.title} className="add-material__form__input" type="text" placeholder="Название" />

                            <label className="add-material__form__label">Описание материала *</label>
                            <input name="description" onChange={handleInpChanges} value={inpData.description} className="add-material__form__input" type="text" placeholder="Описание" />

                            <input className="add-material__form__attach" type="file" size="60" onChange={onFileChange} />
                            <button type="submit" onClick={onFileUpload}>Загрузить</button>
                        </form>
                        :
                        <span className="admin-panel__btn" onClick={() => setAddingMaterial(true)}>ДОБАВИТЬ МАТЕРИАЛ</span>
                }
                <div className="download">

                    {
                        materials ?
                            (
                                materials.materials.map(elem => (
                                    <div key={elem.material_pathname} className="download__item">
                                        <span className="download__item__title">{elem.material_title}</span>
                                        <span className="download__item__description">{elem.material_description}</span>
                                        <button>Удалить <DeleteIcon /></button>
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

export default EditMaterials;