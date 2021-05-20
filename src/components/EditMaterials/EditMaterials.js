import './EditMaterials.css';
import React, { useContext, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { adminMaterialsContext } from '../../contexts/AdminMaterialsContext';

const EditMaterials = () => {
    const [selectedFile, setSelectedFile] = useState();
    const { uploadFile } = useContext(adminMaterialsContext);

    function onFileChange(event) {
        setSelectedFile(event.target.files[0]);
    }

    async function onFileUpload() {
        const formData = new FormData();

        formData.append(
            'newFile',
            selectedFile,
            selectedFile.name
        );

        console.log(selectedFile);

        uploadFile(formData);

    }

    return (
        <>
            <NavBar />
            <div className="upload">
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>Upload</button>
            </div>
        </>
    );
};

export default EditMaterials;