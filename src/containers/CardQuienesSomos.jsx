import React from "react";
import '../styles/CardQuienesSomos.css'
import logo from '../assets/img/cloud-gaming-icon-dark_116137-1945.avif'
import fondo from '../assets/img/among-us-en-luces-de-neon_1920x1080_xtrafondos.com (1).jpg'



const CardQuienesSomos = () => {
    return (
      <>
      <div className="contenedor">
        <div className="card" style={{ maxWidth: "90%",margin: "auto"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={logo} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body contenedor-img">`
                <h5 className="card-title" style={{fontSize: "40px", color: "white" }}>Quienes Somos </h5>
                <p className="card-text texto" style={{fontSize:"19px",color: "white"}}>
                  Somos una plataforma líder en el mundo del cloud gaming,
                  apasionados por brindar a nuestros usuarios una experiencia de
                  juego excepcional y sin límites. Nuestro equipo está
                  conformado por expertos en tecnología y apasionados por los
                  videojuegos, y nos enorgullecemos de ofrecer la mejor solución
                  de gaming en la nube disponible en el mercado. En nuestro
                  servicio de cloud gaming, hemos reunido lo último en
                  tecnología y la potencia de la nube para permitir a los
                  jugadores acceder a una amplia selección de juegos desde
                  cualquier lugar y en cualquier momento. Nuestra misión es
                  eliminar las barreras tradicionales del gaming, permitiendo
                  que los usuarios disfruten de títulos de alta calidad en
                  dispositivos diversos, sin la necesidad de contar con hardware
                  de alto rendimiento. En nuestro afán por brindar una
                  experiencia excepcional, hemos optimizado nuestra plataforma
                  para ofrecer gráficos impresionantes, tiempos de carga rápidos
                  y una jugabilidad fluida, todo ello con una baja latencia para
                  que los jugadores se sumerjan por completo en sus mundos
                  virtuales. Además, nuestro catálogo incluye una amplia
                  variedad de juegos, desde los éxitos más populares hasta joyas
                  ocultas, para satisfacer todos los gustos y preferencias. Nos
                  enorgullecemos de ser una plataforma que se preocupa por la
                  comodidad y satisfacción de nuestros usuarios. Nuestro equipo
                  de atención al cliente está disponible para brindar soporte y
                  resolver cualquier consulta o problema que puedan tener los
                  jugadores. En definitiva, en nuestra plataforma de cloud
                  gaming, nos esforzamos por ser líderes en la industria,
                  ofreciendo un servicio de vanguardia que redefine la forma en
                  que se juegan y disfrutan los videojuegos. Estamos
                  comprometidos con la innovación continua y con proporcionar
                  una experiencia inigualable para todos los amantes de los
                  videojuegos en cualquier parte del mundo. ¡Únete a nosotros y
                  descubre un nuevo mundo de gaming sin fronteras!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default CardQuienesSomos