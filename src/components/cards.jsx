import '../styles/cards.css';

export default function cards() {
  const products = [
    {
      name: 'Nutricionista',
      description: 'Asegura una dieta balanceada dependiendo del objetivo que quieras lograr.',
      imageUrl: 'https://cc834f82.rocketcdn.me/storage/2023/05/elegir-nutricionista-1.webp'
    },

    {
      name: 'Preparador Físico',
      description: 'Entrenamientos personalizados de acuerdo a tus metas e intereses. No importa si eres nuevo o experimentado.',
      imageUrl: 'https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg'
    },
  ];

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}