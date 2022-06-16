// Importando Hooks
import { useEffect, useState } from "react";
// Importando react-router-dom
import { Link, useParams } from "react-router-dom";
// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCog,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// Importando estilos SASS
import "./../styles/component/navBar.scss";

const NavBar = (props) => {
  const [navBar, setNavBar] = useState(false);
  // A partir de esa cantidad de pixeles de altura manda true al navbar
  const NavegacionFija = () => {
    if(window.scrollY >= 10){
      setNavBar(true);
    }else{
      setNavBar(false);
    }
  }
  // Inicializando con el evento scroll
  useEffect(() => {
    window.addEventListener('scroll', NavegacionFija, true);
    // Remove the event listener
    return () => {
      window.removeEventListener('scroll', NavegacionFija, true);
    };
  }, []);

  const classNavBar = navBar ? 'navBar--fijo': 'navBar';

  // Obteniendo los parámetros de la url para el navbar
  const { name } = useParams();

  return (
    <>
      <div className={classNavBar}>
        <div className="navBar__container">
          <div className="navBar__item navBar__item--page">
            <div>
              <Link to={"/dashboard/dashboard"} className="page">
                <FontAwesomeIcon icon={faHouse} /> 
              </Link>
              <span> / {name}</span>
            </div>
            <p>{name}</p>
          </div>

          <div className="navBar__item navBar__item--icon">
            {/* <button href="/" className="icon icon--navBar">
              <FontAwesomeIcon icon={faUser} />
            </button> */}

            <button href="/" className="icon icon--navBar icon--bar" onClick={props.funcion}>
              <FontAwesomeIcon icon={faBars}/>
            </button>
            
            {/* <button href="/" className="icon icon--navBar">
              <FontAwesomeIcon icon={faCog} />
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
