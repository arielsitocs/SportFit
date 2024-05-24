import { conectarBaseDatos, mostrarDatos } from './conexion.js'

async function guardarUsuario(rut, correo, nombre, apellidos, contrasena, perfil) {
    const connection = await conectarBaseDatos();

    try {
        await connection.execute(
            'INSERT INTO cliente (rut_cli, correo, nombre, apellidos, contrasena, perfil) VALUES (:rut, :correo, :nombre, :apellidos, :contrasena, :perfil)', 
            { rut, correo, nombre, apellidos, contrasena, perfil },
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

export { guardarUsuario }