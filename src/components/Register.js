import React, { useState } from 'react';
import { registerWithEmailAndPassword } from '../utils/Config';
import { Box, Input } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerWithEmailAndPassword(email, password);
            // Registro exitoso, redirigir al usuario a la página de inicio de sesión
            navigate('/login');
        } catch (error) {
            console.error(error);
            alert('Error al registrar usuario');
        }
    };

    return (
        <Box>
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>
                <label>
                    Email:
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Registrarse</button>
            </form>
            <p>¿Ya tienes una cuenta? Inicia sesión <Link to="/login">aquí</Link>.</p>
        </Box>
    );
};

export default Register;
