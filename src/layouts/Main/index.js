// Importando Hooks
import { useState } from "react";
// Importando react-router
import { Outlet } from "react-router-dom";
// Importando componentes
import Aside from "./../../components/Aside";
import NavBar from "../../components/NavBar";
// Importando estilos
import "./../../styles/layouts/main.scss";

const Main = () => {
  const [btnMenu, setBtnMenu] = useState(false);

  const HandleBtnMenu = () => {
    if(btnMenu === true){
      setBtnMenu(false);
    } else{
      setBtnMenu(true);
    }
  };
  
  const classMenu = btnMenu ? 'aside aside--float': 'aside';

  return (
    <>
      <div className="main">
        <div className="main__container">
          <div className={classMenu}>
            <Aside />
          </div>

          <div className="content">
            <div className="content__container">
            <div className="header--main">
              <NavBar funcion={HandleBtnMenu}/>
            </div>
            
            <div className="Outlet">
              <Outlet />
            </div>
            </div>
          </div>          
        </div>
      </div>
    </>
  );
};

export default Main;
