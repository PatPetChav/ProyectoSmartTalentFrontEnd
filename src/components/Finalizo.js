import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
// Importando react-router-dom
import { Link } from "react-router-dom";
import "./../styles/page/home/layout.css"


// class Finalizo extends Component {
  
const Finalizo = () => {
    return (
      <header id="finalizo" className="finalizo-form" >
       <ParticlesBg type="circle" bg={true} ></ParticlesBg>     
        

        <div className="row banner ">
          <div className="banner-text">
            <Fade bottom>
              <p className="finalizo1">¡Muchas Gracias!</p>
              <p className="finalizo2">Toda la información fue enviada correctamente. estaremos en contacto en caso que sea seleccionado.</p>
            </Fade>
           
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <Link to="/" className="button btn postula-btn">
                  <i className="fa fa-book"></i>Cerrar
                </Link>             
              </ul>
            </Fade>
          </div>
        </div>        
      </header>
    );
}

export default Finalizo;