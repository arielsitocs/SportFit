import { conectarBaseDatos } from './conexion.js';

async function eliminarSuscripcion(codigo_suscripcion) {
    const connection = await conectarBaseDatos();

    try {
        await connection.execute(
            'BEGIN EliminarSuscripcion(:codigo_suscripcion); END;', 
            { codigo_suscripcion },
            { autoCommit: true }
        );
        console.log("Suscripción eliminada.");
    } catch (err) {
        console.error("Error al eliminar suscripción: " + err);
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

export { eliminarSuscripcion };
