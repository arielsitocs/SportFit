import '../../styles/productos.css'
import { AppContext } from '../../App'
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Producto(props) {

    const { login, setLogin } = useContext(AppContext);

    const navigate = useNavigate();

    const manejarCompra = () => {
        if(login) 
        {
            navigate('/carro')
        } 
        else 
        {
            navigate('/login')
        }
    }

    return (
        
        <div className='producto'>
            <div className="producto-top">
                <div className="producto-foto">
                    <img src={props.imagen} alt="" />
                </div>

                <div className="producto-info">
                    <h2>{props.nombre}</h2>
                    <p>{props.descripcion}</p>
                    <p>${props.precio}</p>

                    <div className="producto-boton">
                       <button onClick={manejarCompra}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}