import '../styles/footer.css'

export default function Footer() {
    return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4" id="contacto">
            <p className="pContacto">Contacto</p>
              <p>Teléfono: 22354 0900 </p>
              <p>Punto Estudiantil: 23540941</p>
          </div>

          <div className='barritaD'></div>

          <div className="col-md-4" id="ubicacion" >
            <p className="ubi">Ubicacion:</p>
            <div>
            <p >Av. Concha y Toro 1340, Puente Alto.</p>
            </div>
          </div>

          <div className='barritaI'></div>

          <div className="col-md-4" id="RRHH">
            <p className="contacto">Redes Sociales</p>
            <div>
              <a href="https://www.instagram.com">
              <p>Instagram</p>
              </a>
            </div>


            <div>
              <a href="https://www.instagram.com">
              <p >LinkedIn</p>
              </a>
            </div>

            <div>
              <a href="https://www.instagram.com">
              <p >WhatsApp</p>
              </a>
            </div>
          </div>
        </div>

          <div className="col-md-4">
            <p >© Copirrai Si copiai esta wea te wa denunciar hijolamaraca</p>
          </div>

      </div>
    </footer>
      );
}

