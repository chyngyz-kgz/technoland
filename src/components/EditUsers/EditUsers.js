import React, { useContext, useState, useEffect } from 'react';
import './EditUsers.css';
import { adminMaterialsContext } from '../../contexts/AdminMaterialsContext';
import { materialsContext } from '../../contexts/MateriasContext';
import DeleteIcon from '@material-ui/icons/Delete';
import { adminAuthContext } from '../../contexts/AdminAuthContext';
import { useHistory } from 'react-router';
import AdminPanelNavBar from '../AdminPanelNavBar/AdminPanelNavBar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const EditUsers = () => {
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState();
    const { isAdminLogedIn } = useContext(adminAuthContext);
    const { uploadFile, progress, uploadingMessage, addingMaterial, setAddingMaterial } = useContext(adminMaterialsContext);
    const { getMaterials, materials, totalPages } = useContext(materialsContext);
    const [inpData, setInpData] = useState({ title: '', description: '' });
    const [page, setPage] = useState(getPage());


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

    async function onFileUpload() {
        const formData = new FormData();

        if (!selectedFile || !inpData.title || !inpData.description) {
            return;
        }

        if (selectedFile) {
            formData.append(
                'newFile',
                selectedFile,
                selectedFile.name
            );
        }

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
        setInpData({ title: '', description: '' });
    }

    return (
        <>
            <AdminPanelNavBar />
            <div className="news__container">
                <span className="news__title">ПОЛЬЗОВАТЕЛИ</span>
                {
                    addingMaterial ?
                        <form onSubmit={(event) => event.preventDefault()} className="add-user__form">
                            <label className="add-user__form__title">Заполните следующие поля</label>

                            <label className="add-user__form__label">Имя, фамилия *</label>
                            <input name="title" onChange={handleInpChanges} value={inpData.title} className="add-user__form__input" type="text" placeholder="Имя, фамилия" />

                            <label className="add-user__form__label">E-MAIL *</label>
                            <input name="description" onChange={handleInpChanges} value={inpData.description} className="add-user__form__input" type="text" placeholder="Адрес эл. почты" />

                            <label className="add-user__form__label">Пароль *</label>
                            <input name="description" onChange={handleInpChanges} value={inpData.description} className="add-user__form__input" type="text" placeholder="Пароль" />

                            <span className="add-user__form__error">{uploadingMessage}</span>

                            <button disabled={progress} type="submit" onClick={onFileUpload}>ЗАРЕГИСТРИРОВАТЬ</button>
                        </form>
                        :
                        <span className="admin-panel__btn" onClick={() => setAddingMaterial(true)}>ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ</span>
                }
                <div className="download">
                    <List style={{ width: '100%' }}>
                        <ListItem style={{ backgroundColor: '#f4f7f8', borderRadius: '5px', marginTop: '1vh' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Чынгыз Маратбек уулу"
                            />
                            <ListItemText
                                primary="chyngyz.kg.na.ak@gmail.com"
                            />
                            <ListItemText
                                primary="chyngyz1111"
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <EditIcon style={{ fontSize: '30px', color: '#003366' }} />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon style={{ color: 'red', fontSize: '30px' }} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem style={{ backgroundColor: '#f4f7f8', borderRadius: '5px', marginTop: '1vh' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Чынгыз Маратбек уулу"
                            />
                            <ListItemText
                                primary="chyngyz.kg.na.ak@gmail.com"
                            />
                            <ListItemText
                                primary="chyngyz1111"
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <EditIcon style={{ fontSize: '30px', color: '#003366' }} />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon style={{ color: 'red', fontSize: '30px' }} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem style={{ backgroundColor: '#f4f7f8', borderRadius: '5px', marginTop: '1vh' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Чынгыз Маратбек уулу"
                            />
                            <ListItemText
                                primary="chyngyz.kg.na.ak@gmail.com"
                            />
                            <ListItemText
                                primary="chyngyz1111"
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <EditIcon style={{ fontSize: '30px', color: '#003366' }} />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon style={{ color: 'red', fontSize: '30px' }} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem style={{ backgroundColor: '#f4f7f8', borderRadius: '5px', marginTop: '1vh' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Чынгыз Маратбек уулу"
                            />
                            <ListItemText
                                primary="chyngyz.kg.na.ak@gmail.com"
                            />
                            <ListItemText
                                primary="chyngyz1111"
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <EditIcon style={{ fontSize: '30px', color: '#003366' }} />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon style={{ color: 'red', fontSize: '30px' }} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem style={{ backgroundColor: '#f4f7f8', borderRadius: '5px', marginTop: '1vh' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Чынгыз Маратбек уулу"
                            />
                            <ListItemText
                                primary="chyngyz.kg.na.ak@gmail.com"
                            />
                            <ListItemText
                                primary="chyngyz1111"
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <EditIcon style={{ fontSize: '30px', color: '#003366' }} />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon style={{ color: 'red', fontSize: '30px' }} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem style={{ backgroundColor: '#f4f7f8', borderRadius: '5px', marginTop: '1vh' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Чынгыз Маратбек уулу"
                            />
                            <ListItemText
                                primary="chyngyz.kg.na.ak@gmail.com"
                            />
                            <ListItemText
                                primary="chyngyz1111"
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <EditIcon style={{ fontSize: '30px', color: '#003366' }} />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon style={{ color: 'red', fontSize: '30px' }} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </div>
            </div>
        </>
    );
};

export default EditUsers;