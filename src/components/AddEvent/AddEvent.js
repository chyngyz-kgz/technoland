import React, { useContext, useState } from 'react';
import './AddEvent.css'
import NavBar from '../NavBar/NavBar';
import { adminNewsContext } from '../../contexts/AdminNewsContext';
import { useHistory } from 'react-router';

const AddEvent = () => {
    const { postEvent } = useContext(adminNewsContext);
    const history = useHistory();
    const [formData, setFormData] = useState(
        {
            title: '',
            description: '',
            image: '',
            subTitle: '',
            additionalDescription: '',
            additionalImage: ''
        }
    )

    function handleChanges(event) {
        setFormData(
            {
                ...formData,
                [event.target.name]: event.target.value
            }
        );
    };

    function handleSubmit(event) {
        event.preventDefault();
        postEvent(formData, history);
    }

    return (
        <>
            <NavBar />
            <div className="admin-panel__container">
                <span className="admin-panel__title">ДОБАВЛЕНИЕ НОВОСТИ</span>
                <form onSubmit={handleSubmit} className="add-event__form">
                    <span className="form__title">Поля со знаком * являются обязательными для заполнения</span>
                    <label>Заголовок новости *</label>
                    <input onChange={handleChanges} value={formData.title} name="title" type="text" placeholder="Заголовок" />

                    <label>Описние *</label>
                    <textarea onChange={handleChanges} value={formData.description} name="description" type="text" placeholder="Описание" />

                    <label>Главное изображение *</label>
                    <input onChange={handleChanges} value={formData.image} name="image" type="text" placeholder="Изображение" />

                    {/* {Блок 2} */}
                    <label>Подзаголовок</label>
                    <input onChange={handleChanges} value={formData.subTitle} name="subTitle" type="text" placeholder="Подаголовок" />

                    <label>Второе описание *</label>
                    <textarea onChange={handleChanges} value={formData.additionalDescription} name="additionalDescription" type="text" placeholder="Дополнительное Описание" />

                    <label>Дополнительное изображение *</label>
                    <input onChange={handleChanges} value={formData.additionalImage} name="additionalImage" type="text" placeholder="Дополнительное изображение" />

                    <button type="submit">ОПУБЛИКОВАТЬ</button>
                </form>
            </div>
        </>
    );
};

export default AddEvent;