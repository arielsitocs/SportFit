import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { guardarUsuario } from './registrarUsu.js';
import { ingresarUsuario } from './loginUsu.js';
import { ingresarOrden } from './ingresarOrden.js'

const app = express(); 
const port = 3000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para analizar los datos JSON del cuerpo de la solicitud
app.use(bodyParser.json());

// Ruta para manejar el envío del formulario de registro
app.post('/registro', async (req, res) => {
    const { rut, correo, nombre, apellidos, contrasena } = req.body;

    try {
        await guardarUsuario(rut, correo, nombre, apellidos, contrasena);
        res.status(200).json({ success: true, message: 'Usuario registrado exitosamente.' });
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ success: false, message: 'Ocurrió un error al registrar el usuario.' });
    }
});

// Manejar el ingreso de usuario
app.post('/login', async (req, res) => {
    const { nombre, contrasena } = req.body;
    try {
        const usuario = await ingresarUsuario(nombre, contrasena);
        if (usuario) {
            res.status(200).json({ success: true, message: 'Usuario ingresado exitosamente.', usuario });
            return usuario;
        } else {
            res.status(401).json({ success: false, message: 'Usuario no encontrado.' });
        }
    } catch (error) {
        console.error('Error al ingresar:', error);
        res.status(500).json({ success: false, message: 'Ocurrió un error al ingresar el usuario.' });
    }
});

// Manejar el ingreso de una compra
app.post('/carro', async (req, res) => {
    const { total, direccion, fecha, rut_cliente, codigo_producto } = req.body;
    try {
        await ingresarOrden(total, direccion, fecha, rut_cliente, codigo_producto);
        res.status(200).json({ success: true, message: 'Orden ingresada exitosamente.' });
    } catch (error) {
        console.error('Error al ingresar orden:', error);
        res.status(500).json({ success: false, message: 'Ocurrió un error al ingresar la orden.' });
    }
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
