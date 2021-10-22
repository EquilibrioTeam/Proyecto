import Logo from 'media/logo2.png'
import React from "react";

import {
    Link,
  } from "react-router-dom";

function Index(){
    return (
     <div className="Index"> 
        <body>
            <div className="principal">
                <div className="navegacion">
                    <div className="menu">
                        <ul className="items">
                            <li className="li-menu">Inicio</li>
                            <li className="li-menu">Sobre Nosotros</li>
                            <li className="li-menu">Ir a la tienda</li>
                            <li className="li-menu">Contáctenos</li>
                            
                        </ul>
                        <ul className="item-boton">
                            <li className="li-button">
                                <Link to="/login">
                                <button className="btn_init_sesion">
                                Inicio Sesión
                                </button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="barra">
                        <img className="logo" src={Logo} alt="logo" />
                </div>
                {/* <!-- BARRA DE MENU --> */}
                <div className="contenido">
                    <p className="descripcion">
                        Bienvenidos a su tienda ComprAEqui <br/> 
                        aquí encontrará todas las marcas y referencias <br/>
                        de su calzado favorito, por favor sientase en  <br/> 
                        confianza e ingrese a nuestra tienda en donde <br/> 
                        encontrará grandes descuentos
                    </p>
                </div>
            </div>
        </body>
    </div>
    )
}

export default Index;