import React from "react";
import '../styles/LandingPageBody.css'

const LandingPageBody = () => {
    return(
        <>
            <main>
                <section className="page-izq">
                    <div className="title-page">
                        <h1>Lleva tu juegos favoritos a donde vayas</h1>
                        <span>Los últimos juegos AAA disponibles disponible en cualquiera de tus dispositivos</span>
                    </div >
                    <form action="/" className="formulario">
                        <label for="correo"></label>
                            <input type="text" name="correo" className="input" placeholder="Ingrese su correo"/>
                            <button type="button"  className="btn btn-success">+ informacion</button>
                    </form>
                    <div className="container-card-info">
                        <div className="card-info">
                            <h2>7m</h2>
                            <span>Usuario registrados</span>
                        </div>  
                        <div className="card-info">
                            <h2>3.4m</h2>
                            <span>Usuario Activos</span>
                        </div>  
                        <div className="card-info">
                            <h2>1000+</h2>
                            <span>Juegos disponibles</span>
                        </div>  
                    </div>
                </section>
                <section className="page-der">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://sm.ign.com/ign_latam/cover/t/the-legend/the-legend-of-zelda-tears-of-the-kingdom_p893.jpg" className="d-block w-100" alt="zelda TOK"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202009/1710/UUnpHLJqLAIJX5HioswiPuAm.png" className="d-block w-100" alt="devil may cry 5"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://generacionxbox.com/wp-content/uploads/2021/06/metro-exodus-series-generacion-xbox-portada.jpg" className="d-block w-100" alt="metro exodus"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://static.13.cl/7/sites/default/files/images/ocupload/rocket-league.jpeg" className="d-block w-100" alt="rocket-league"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.blogs.es/4c3cf2/godofwarragnarok/1366_2000.jpeg" className="d-block w-100" alt="god of war"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202208/0204/AyLXzI2wnZZTRGicY5uZ35VY.png" className="d-block w-100" alt="destiny"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://wallpapers.com/images/featured/wlq3ykrxbaoadjow.jpg" className="d-block w-100" alt="genshin impact"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </main>
        </>
    )

}

export default LandingPageBody