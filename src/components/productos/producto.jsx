import '../../styles/productos.css'

export default function Producto(props) {
    return (
        <div className='producto'>
            <div className="producto-top">
                <div className="producto-foto">
                    <img src={props.imagen} alt="" />
                </div>

                <div className="producto-info">
                    <h2>{props.nombre}</h2>
                    <p>{props.descripcion}</p>
                    <p>{props.precio}</p>

                    <div className="producto-boton">
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}