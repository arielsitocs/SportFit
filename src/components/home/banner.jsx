import '../../styles/banner.css'
import { useEffect } from 'react';

export default function Banner() {
    useEffect(() => {
        var boton = document.getElementById("explorar");
        var productos = document.getElementById("productos");

        if(boton && productos) {
            boton.addEventListener("click", function() {
                productos.scrollIntoView({behavior: 'smooth'});
            });
        } else {
            console.log("Error al cargar componentes.");
        }
    }, []);

    return (
        <div className='bannerPic'>
            <div className="bannerFrase">
                <h1>Más que productos, experiencias que te inspiran.</h1>
                <button id='explorar'>Explorar</button>
            </div>
            <img src="https://glogym.co.uk/wp-content/uploads/2016/01/red-gym-banner.jpg" />
        </div>
    );
}