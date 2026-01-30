import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../shared/services/supabaseClient';

export const useTourForm = (onSubmit) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    
 
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

    const getUsuarioLogado = () => {
       
        const userStr = sessionStorage.getItem('user') || localStorage.getItem('user');
        if (userStr) return JSON.parse(userStr);

       
        const userId = sessionStorage.getItem('userId') || localStorage.getItem('userId');
        if (userId) return { id: userId };

        return null;
    };

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
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        setFormData((prev) => ({ ...prev, imagem: null }));
        setPreview(null);
        const fileInput = document.getElementById('imagem-upload');
        if (fileInput) fileInput.value = '';
    };

    const uploadImagem = async (file) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}_${Date.now()}.${fileExt}`;
        
        const { error } = await supabase.storage
            .from('viagens')
            .upload(fileName, file);

        if (error) throw error;

        const { data } = supabase.storage
            .from('viagens')
            .getPublicUrl(fileName);
            
        return data.publicUrl;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            
            const usuario = getUsuarioLogado();
            
            if (!usuario || !usuario.id) {
                alert("Sessão inválida ou expirada. Faça login novamente.");
                navigate('/login');
                return;
            }

            if (!formData.imagem) {
                alert("Por favor, selecione uma imagem de capa.");
                setIsLoading(false);
                return;
            }

         
            let urlFinal = '';
            if (formData.imagem instanceof File) {
                urlFinal = await uploadImagem(formData.imagem);
            }

           
            const payload = {
                titulo: formData.titulo,
                destino: formData.destino,
                descricao: formData.descricao,
                dataPartida: formData.dataPartida,
                dataRetorno: formData.dataRetorno,
                preco: parseFloat(formData.preco),
                vagasTotais: parseInt(formData.vagasTotais, 10),
                status: formData.status,
                organizadorId: usuario.id, 
                imagemUrl: urlFinal
            };

            await onSubmit(payload);
            navigate('/gerir-roteiros');
            
        } catch (error) {
            console.error("Erro no submit:", error);
           
            if (error.response && error.response.status === 403) {
                alert("ERRO 403: Você não tem permissão.\nVerifique se seu usuário é ORGANIZADOR.");
            } else {
                alert("Erro ao salvar viagem.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        preview,
        isLoading,
        handleChange,
        handleRemoveImage,
        handleSubmit,
        navigate 
    };
};