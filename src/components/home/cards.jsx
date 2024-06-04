import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import '../../styles/cards.css';
import { useContext } from 'react';
import nutricionista from '../../assets/img/nutricionista.jpg'
import preparador from '../../assets/img/preparador.jpg'

export default function cards() {
  const products = [
    {
      name: 'Nutricionista',
      description: 'Asegura una dieta balanceada dependiendo del objetivo que quieras lograr.',
      imageUrl: nutricionista
    },

    {
      name: 'Preparador Físico',
      description: 'Entrenamientos personalizados de acuerdo a tus metas e intereses. No importa si eres nuevo o experimentado.',
      imageUrl: preparador
    },
  ];

  const { login } = useContext(AppContext);

  const navigate = useNavigate();

  const redireccion = () => {
    if(login) {
      navigate('/servicios')
    } else {
      navigate('/login')
    }
  }

  return (
    <div>
      <div className="product-title">
        <h1>Nuestros servicios</h1>
      </div>
      <div className="product-section">
        <div className="column">
          {products.slice(0, Math.ceil(products.length / 2)).map((product, index) => (
            <div key={index} className="card">
              <img src={product.imageUrl} alt={product.name} className="card-image" />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">{product.description}</p>
                <button className='btn-contratar' onClick={redireccion}>Contratar</button>
              </div>
            </div>
          ))}
        </div>
        <div className="column">
          {products.slice(Math.ceil(products.length / 2)).map((product, index) => (
            <div key={index} className="card">
              <img src={product.imageUrl} alt={product.name} className="card-image" />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">{product.description}</p>
                <button className='btn-contratar' onClick={redireccion}>Contratar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}