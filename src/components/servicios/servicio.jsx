import '../../styles/servicios.css'

export default function Servicio({ imagen, nombre, descripcion, precio }) {
    return (
        <div className='servicio'>
            <div className="servicio-imagen">
                <img src={imagen} />
            </div>



            <div className="servicio-content">
                <div className="servicio-title">
                    <h3>{nombre}</h3>
                </div>
                
                <p>{descripcion}</p>
                <p>${precio}</p>

                <div className="servicio-button">
                    <a href="/carro"><button>Contratar</button></a>
                </div>
            </div>
        </div>
    )
}