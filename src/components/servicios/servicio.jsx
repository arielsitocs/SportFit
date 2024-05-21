import '../../styles/servicios.css'
import { AppContext } from '../../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Servicio({ imagen, nombre, descripcion, precio }) {
    
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
                    <button onClick={manejarCompra}>Contratar</button>
                </div>
            </div>
        </div>
    );
}