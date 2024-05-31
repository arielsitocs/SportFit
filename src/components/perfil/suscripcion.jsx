import '../../styles/perfil.css'

export default function (props) {

    var codigo_suscripcion;

    const eliminarSuscripcion = async () => {

        codigo_suscripcion = props.codigo_suscripcion;

        try {
            const response = await fetch('http://localhost:3000/perfil', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ codigo_suscripcion }),
            });

            if (response.ok) {
                alert("Suscripción eliminada.")
            } else {
                alert("Error al eliminar suscripcion.");
            }
        } catch (error) {
            console.error("Error al eliminar la suscripcion: " + error);
            alert("Ocurrió un error al eliminar la suscripción.");
        }
    }

    return (
        <div className='suscripcion'>
            <div className="suscripcion-info">
                <h3>{props.tipo_plan}</h3>
                <p>{props.descripcion}</p>
                <p>Fecha inicio: {props.fecha_inicio}</p>
                <p>Fecha término:{props.fecha_exp}</p>
                <p>${props.valor}/mes</p>
            </div>

            <div className="suscripcion-boton">
                <button onClick={() => eliminarSuscripcion(props.codigo_suscripcion)}>Cancelar</button>
            </div>
        </div>
    )
}