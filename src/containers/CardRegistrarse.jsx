import React from "react";
import { useEffect,useState } from "react";
import "../styles/CardRegistrarse.css"

const CardRegistrarme = () => {
    
    const [formValidacion,setFormValidacio] = useState(NaN)
    // const handleValidacion = () => {
    //     document.querySelector('form').addEventListener('submit',e => {
    //         e.preventDefault()
    //         const data = Object.fromEntries(new FormData(e.target))
    //         console.log(data)
    //         if (data.contrasena === data.confirmar_contrasena){
    //             setFormValidacio(true)
    //         } else {
    //             setFormValidacio(false)
    //         }
    //     })
    const validarCamposLlenos = () => {
        const formInputs = document.querySelectorAll('form input[required]');
        for (const input of formInputs) {
          if (!input.value.trim()) {
            return false
          }
        }
        return true
      }
    const prueba = () => {
        document.querySelector('form').addEventListener('submit',e => {
            e.preventDefault()
            const contra = document.querySelector("#contrasena").value
            const confirmacion = document.querySelector("#confirmar_contrasena").value
            if (validarCamposLlenos()) {
                if (contra === confirmacion ){
                    setFormValidacio(true)
                } else {
                    setFormValidacio(false)
                }
            }
        })
    }
    
    return (
        <>
        <div className="contenedor">
          <div className="container mt-5" style={{ width: "100%" }}>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card" style={{ width: "100%",margin: "auto" }}>
                  <div className="card-header">
                    <h4 className="text-center">Registro de Usuario</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre"
                          name="nombre"
                          required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contrasena">Contraseña:</label>
                        <input
                          type="password"
                          className="form-control"
                          id="contrasena"
                          name="contrasena"
                          required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="confirmar_contrasena">
                          Confirmar Contraseña:
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmar_contrasena"
                          name="confirmar_contrasena"
                          required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="ciudad">Ciudad:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="ciudad"
                          name="ciudad"
                          required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="codigo_zip">Código ZIP:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="codigo_zip"
                          name="codigo_zip"
                          required
                          />
                      </div>
                      <div className="form-group text-center">
                        <button  onClick={prueba} className="btn btn-primary">
                          Registrarse
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            {
                formValidacion === true && <h2 style={{textAlign: "center"}}>usted se a registrado exitosamente, tenga un buen dia</h2>
            }
            {
                formValidacion === false && <h2 style={{textAlign: "center"}}>la contraseña no es igual, vuelva a intentarlo</h2>
            }
          </div>
        </div>

      </>
    )
}

export default CardRegistrarme