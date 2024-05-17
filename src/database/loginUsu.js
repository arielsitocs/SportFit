import { conectarBaseDatos } from './conexion.js';

async function ingresarUsuario(usuario, contrasena) {
    const connection = await conectarBaseDatos();

    try {
        const result = await connection.execute(
            'SELECT * FROM usuario WHERE usuario = :usuario AND contrasena = :contrasena',
            { usuario, contrasena },
            { autoCommit: true }
        );

        // Si se encuentra el usuario, devuelve el resultado
        if (result.rows.length > 0) {
            console.log("Usuario ingresado:", result.rows[0]);
            return result.rows[0];
        } else {
            console.log("Usuario no encontrado.");
            return null;
        }
    } catch (err) {
        console.error("Error al ingresar usuario:", err);
        return null;
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('Conexión cerrada');
            } catch (err) {
                console.error('Error al cerrar la conexión:', err);
            }
        }
    }
}

export { ingresarUsuario };