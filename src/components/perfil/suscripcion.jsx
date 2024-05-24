import '../../styles/perfil.css'

export default function(props) {
    return(
        <div className='suscripcion'>
            <div className="suscripcion-info">
                <h3>{props.tipo_plan}</h3>
                <p>{props.descripcion}</p>
                <p>Fecha inicio: {props.fecha_inicio}</p>
                <p>Fecha término:{props.fecha_exp}</p>
                <p>${props.valor}</p>
            </div>

            <div className="suscripcion-boton">
                <button>Cancelar</button>
            </div>
        </div>
    )
}