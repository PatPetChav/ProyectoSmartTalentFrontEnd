// Importando react-router-dom
import { Link } from "react-router-dom";
// Importando componentes
import SignOutButton from "./../components/SignOutButton"
// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faTableList, faUser } from "@fortawesome/free-solid-svg-icons";
// Importando estilos SASS
import "./../styles/component/aside.scss";

const Aside = (props) => {
  return (
    <>
      <aside className="menu"> 
        <div className="menu__container">
          <h3 className="menu__title">Smart Talent</h3>

          <div className="menu__list">
            <Link to={"/dashboard/dashboard"} className="menu__link" >
              <FontAwesomeIcon icon={faHouse} className="icon" />
              <p>Dashboard</p>
            </Link>

            <Link to={"/tables/tables"} className="menu__link" >
              <FontAwesomeIcon icon={faTableList}  className="icon icon--menu" />
              <p>Tables</p>
            </Link>
        
            <SignOutButton/>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
