// import '../styles/footer.css'
import style from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className="col-md-4" id="contacto" >
            <div className={style.contacto}>
              <p className="pContacto">Contacto</p>
              <p>Teléfono: 22354 0900 </p>
              <p>Punto Estudiantil: 23540941</p>
            </div>
          </div>

          <div className={style.barritaD}> </div>

          <div className="col-md-4" id="ubicacion">
            <div className={style.ubicacion}>
              <p className="ubi">Ubicacion:</p>
              <div>
                <p>Av. Concha y Toro 1340, Puente Alto.</p>
              </div>
            </div>
          </div>

          <div className={style.barritaI}></div>

          <div className="col-md-4" id="RRHH">

            <div className={style.RRHH}>


              <p className="contacto">Redes Sociales</p>
              <div>
                <a href="https://www.instagram.com">
                  <p>Instagram</p>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com">
                  <p >LinkedIn</p>
                </a>
              </div>

              <div>
                <a href="https://www.whatsapp.com/?lang=es_LA">
                  <p >WhatsApp</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={style.copyright}>
            <p >© SportFit 2024. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

