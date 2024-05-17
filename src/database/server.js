import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { guardarUsuario } from './registrarUsu.js';
import { ingresarUsuario } from './loginUsu.js';

const app = express();
const port = 3000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para analizar los datos JSON del cuerpo de la solicitud
app.use(bodyParser.json());

// Ruta para manejar el envío del formulario
app.post('/registro', async (req, res) => {
    const { correo, usuario, contrasena } = req.body;

    try {
        await guardarUsuario(correo, usuario, contrasena);
        res.status(200).send('Usuario registrado exitosamente.');
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).send('Ocurrió un error al registrar el usuario.');
    }
});

// Manejar el ingreso de usuario
app.post('/login', async (req, res) => {
    const { usuario, contrasena } = req.body;

    try {
        await ingresarUsuario(usuario, contrasena);
        res.status(200).send('Usuario ingresado exitosamente.');
    } catch (error) {
        console.error('Error al ingresar:', error);
        res.status(500).send('Ocurrió un error al ingrsar el usuario.');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
