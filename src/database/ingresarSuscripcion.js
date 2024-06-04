import { conectarBaseDatos } from './conexion.js';

async function ingresarSuscripcion(descripcion, fecha_inicio, fecha_exp, tipo_plan, valor, rut_cliente, comentario) {
    const connection = await conectarBaseDatos();

    try {
        await connection.execute(
            `BEGIN 
                InsertarSuscripcion(
                    :descripcion,
                    :fecha_inicio,
                    :fecha_exp,
                    :tipo_plan,
                    :valor,
                    :rut_cliente,
                    :comentario
                ); 
            END;`,
            { descripcion, fecha_inicio, fecha_exp, tipo_plan, valor, rut_cliente, comentario },
            { autoCommit: true }
        );
        console.log("Suscripción ingresada.");
    } catch (err) {
        console.error("Error al ingresar la suscripción: " + err);
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

export { ingresarSuscripcion };
