import React, { useState } from 'react';
import { logInWithEmailAndPassword } from '../utils/Config';
import { Box, Input, TextField } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../utils/Config';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const isAdmin = await logInWithEmailAndPassword(email, password);
            if (isAdmin === 1) {
                // El usuario tiene permisos de administrador, redirigir al panel de administración
                navigate('/admin');
            } else {
                // El usuario no tiene permisos de administrador, mostrar mensaje de error
                alert('No tienes permisos de administrador');
            }
        } catch (error) {
            console.error(error);
            alert('Error al iniciar sesión');
        }
    };

    return (
        <Box>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Iniciar sesión</button>
            </form>
            <p>No tienes una cuenta? Regístrate <Link to="/registro">aquí</Link>.</p>
        </Box>
    );
};

export default Login;
