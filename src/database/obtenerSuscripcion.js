import { conectarBaseDatos } from './conexion.js';

async function obtenerSuscripcion(rut_cliente) {
    const connection = await conectarBaseDatos();

    try {
        const result = await connection.execute(
            'SELECT * FROM suscripcion WHERE rut_cli = :rut_cliente', 
            { rut_cliente },
            { autoCommit: true }
        );
        console.log('Suscripciones obtenidas: ', result.rows)
        return result.rows;
    } catch (err) {
        console.error("Error al obtener las suscripciones: " + err);
        throw err;
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

export { obtenerSuscripcion }
