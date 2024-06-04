import { conectarBaseDatos } from './conexion.js';

async function ingresarComentario(codigo_comentario, comentario) {
    const connection = await conectarBaseDatos();

    try {
        await connection.execute(
            'BEGIN updateSuscripcion(:codigo_comentario, :comentario); END;', 
            { codigo_comentario, comentario },
            { autoCommit: true }
        );
        console.log("Comentario enviado.");
    } catch (err) {
        console.error("Error al enviar comentario: " + err);
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

export { ingresarComentario };
