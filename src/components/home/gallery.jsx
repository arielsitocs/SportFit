import '../../styles/gallery.css'
import { useFetch } from '../../useFetch.js'

export default function gallery() {
  /* CONSUMIR API */

  const { data } = useFetch("https://www.saborlatinochile.cl/duoc/servicio_web_sportfit.php")


  return (
    <div className="product-gallery">
      <div className='titulo'>
        <h1>Productos destacados</h1>
      </div>

      <div className="grid-container" id='productos'>
        {data?.map((product, index) => (
          <a href="/carro"><div key={index} className="grid-item">
            <img src={product.imagen} />
            <div className="product-name">{product.nombre}</div>
          </div></a>
        ))}
      </div>
    </div>
  );
};