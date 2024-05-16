import { conectarBaseDatos, mostrarDatos } from './conexion.js'

async function guardarUsuario(correo, usuario, contrasena) {
    const connection = await conectarBaseDatos();

    try {
        await connection.execute(
            'INSERT INTO usuario (correo, usuario, contrasena) VALUES (:correo, :usuario, :contrasena)', 
            { correo, usuario, contrasena },
            { autoCommit: true }
        );
        console.log("Usuario registrado.");
    } catch (err) {
        console.error("Error al registrar: " + err);
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('Conexión cerrada');
            } catch (err) {
                console.error('Error al cerrar la conexión :', err);
            }
        }
    }
}

mostrarDatos();

guardarUsuario('ariel@gmail.com', 'arielsitox', 'patroclo1234');

export { guardarUsuario }