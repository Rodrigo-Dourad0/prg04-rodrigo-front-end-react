import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useTourForm = (onSubmit) => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        titulo: '',
        destino: '',
        imagem: null,
        descricao: '',
        dataPartida: '',
        dataRetorno: '',
        preco: '',
        vagasTotais: '',
        status: 'ABERTA'
    });

    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'imagem' && files && files[0]) {
            const file = files[0];
            setFormData((prev) => ({ ...prev, [name]: file }));
            setPreview(URL.createObjectURL(file));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleRemoveImage = (e) => {
        e.stopPropagation();
        e.preventDefault();

        setFormData((prev) => ({ ...prev, imagem: null }));
        setPreview(null);

       
        const fileInput = document.getElementById('imagem-upload');
        if (fileInput) {
            fileInput.value = '';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.imagem) {
            alert("Por favor, selecione uma imagem de capa.");
            return;
        }

       
        const payload = {
            ...formData,
            preco: parseFloat(formData.preco),
            vagasTotais: parseInt(formData.vagasTotais, 10)
        };

        onSubmit(payload);
    };

    return {
        formData,
        preview,
        handleChange,
        handleRemoveImage,
        handleSubmit,
        navigate 
    };
};