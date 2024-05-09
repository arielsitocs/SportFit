import '../../styles/carro.css'
import { useState } from 'react'

export default function Producto(props) {
    const [cantidad, setCantidad] = useState(1)

    return (
        <div className="productoCarro">
            <div className="producto-imagen">
                <img src={props.imagen} />
            </div>
            <div className="producto-detalle">
                <h2>{props.nombre}</h2>
                <p>{props.descripcion}</p>
            </div>
            <div className="producto-info">
                <h3>${props.precio * cantidad}</h3>
                <div className='producto-cantidad'>
                    <p>{cantidad}</p>
                    <div>
                        <button onClick={() => setCantidad(cantidad + 1)}>+</button>
                        <button onClick={() => setCantidad(cantidad - 1)}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



