import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Formulario = () => {
    const [formularioData, setFormularioData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [enviando, setEnviando] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormularioData({ ...formularioData, [name]: value });
    };

    const validarCampos = () => {
        if (!formularioData.name || !formularioData.email || !formularioData.message) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios',
            });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validarCampos()) {
            return;
        }

        try {
            setEnviando(true);
            const response = await axios.post('https://formspree.io/f/xknlqyov', formularioData);
            console.log('Formulario enviado con éxito', response.data);
            setFormularioData({
                name: '',
                email: '',
                message: '',
            });
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Formulario enviado con éxito',
            });
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al enviar el formulario',
            });
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div>
            <div class="title-box-2">
                <h5 class="title-left">CONTACTO</h5>
            </div>
            <form action="https://formspree.io/f/xknlqyov" method="POST" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group my-2">
                    <label htmlFor="name" className='form-label fw-bolder'>Nombre:</label>
                    <input className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={formularioData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email" className='form-label fw-bolder'>Email:</label>
                    <input className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        value={formularioData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="message" className='form-label fw-bolder'>Message:</label>
                    <textarea className="form-control"
                        type="text"
                        id="message"
                        name="message"
                        value={formularioData.message}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="btn btn-primary mt-2 btn-sm btn-lg-sm" type="submit" disabled={enviando}>
                    {enviando ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
};

export default Formulario;
