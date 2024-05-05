import '../../styles/perfil.css'

export default function(props) {
    return(
        <div className='suscripcion'>
            <div className="suscripcion-info">
                <h3>{props.nombre}</h3>
                <p>{props.descripcion}</p>
            </div>

            <div className="suscripcion-boton">
                <button>Cancelar</button>
            </div>
        </div>
    )
}