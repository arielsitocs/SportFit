import { conectarBaseDatos } from './conexion.js'

async function eliminarSuscripcion(codigo_suscripcion) {
    const connection = await conectarBaseDatos();

    try {
        await connection.execute(
            'DELETE FROM suscripcion WHERE codigo = :codigo_suscripcion', 
            { codigo_suscripcion },
            { autoCommit: true }
        );
        console.log("Suscripcion eliminada.");
    } catch (err) {
        console.error("Error al eliminar suscripcion: " + err);
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

export { eliminarSuscripcion }