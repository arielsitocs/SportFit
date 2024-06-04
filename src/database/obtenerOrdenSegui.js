import { conectarBaseDatos } from './conexion.js';

async function obtenerOrdenSegui(rut_cliente) {
    const connection = await conectarBaseDatos();

    try {
        const result = await connection.execute(
            'SELECT * FROM orden WHERE rut_cli = :rut_cliente AND estado != :estado',
            { rut_cliente, estado: 'Completada' },
            { autoCommit: true }
        );
        console.log('Ordenes obtenidas: ', result.rows)
        return result.rows;
    } catch (err) {
        console.error("Error al obtener la orden: " + err);
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

export { obtenerOrdenSegui }
