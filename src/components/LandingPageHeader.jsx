import React from "react";
import iconCloudGaming from '../assets/img/icons8-cloud-gaming-53.png'
import { Link } from "react-router-dom";
import '../styles/LandingPageHeader.css'
const LandingPageHeader = () => {
    return (
        <>
            <nav className="navbar navbar-expand bg-body-tertiary">
                <div className="container-fluid container-nav">
                    <div className="navbar-brand"><img src={iconCloudGaming} alt=""/></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"registrarse"} className="nav-link">Registrarse</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'destacados'} className="nav-link" >Destacados</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"quienes-somos"} className="nav-link">Quienes Somos</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default LandingPageHeader