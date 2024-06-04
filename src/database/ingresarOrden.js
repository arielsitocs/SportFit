import { conectarBaseDatos } from './conexion.js';

async function ingresarOrden(valor, direccion, rut_cliente, codigo_producto, fecha, fecha_estimada, estado) {
    const connection = await conectarBaseDatos();

    try {
        await connection.execute(
            `BEGIN 
                InsertarOrden(
                    :valor, 
                    :direccion, 
                    :rut_cliente, 
                    :codigo_producto, 
                    :fecha, 
                    :fecha_estimada, 
                    :estado
                ); 
            END;`,
            { valor, direccion, rut_cliente, codigo_producto, fecha, fecha_estimada, estado }
        );
        console.log("Orden ingresada.");
    } catch (err) {
        console.error("Error al ingresar orden: " + err);
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

export { ingresarOrden };
