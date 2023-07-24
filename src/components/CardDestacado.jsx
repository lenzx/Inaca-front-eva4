import React from "react";
import '../styles/CardDestacados.css'

const CardDestacado = ({titulo,imagen,descripcion}) => {
    return(
        <>
        <div className="col d-flex justify-content-center ">
            <div className="card text-white bg-dark mb-3" style={{ width: "30rem", height: "700px   "}}>
                <img id="imagen" src={imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">
                            {descripcion}
                        </p>
                    </div>
            </div> 
        </div>
        </>
    )
}

export default CardDestacado