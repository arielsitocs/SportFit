import '../../styles/gallery.css'
import { useFetch } from '../../useFetch.js'
import { AppContext } from '../../App.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function gallery() {
  /* CONSUMIR API */

  const navigate = useNavigate();

  const { login } = useContext(AppContext);

  const { data } = useFetch("https://www.saborlatinochile.cl/duoc/servicio_web_sportfit.php")

  const redireccion = () => {
    if(login) {
      navigate('/productos')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="product-gallery">
      <div className='titulo'>
        <h1>Productos destacados</h1>
      </div>

      <div className="grid-container" id='productos'>
        {data?.map((product, index) => (
          <div key={index} className="grid-item" onClick={redireccion}>
            <img src={product.imagen} />
            <div className="product-name">{product.nombre}</div>
          </div>
        ))}
      </div>
    </div>
  );
};