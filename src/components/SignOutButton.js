// Importando Hooks
import { useContext } from "react";
// Importando Context
import { UserContext } from "../context/UserContext";
// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// Importando estilos SASS
import "./../styles/component/aside.scss";
// Importando react-router-dom
import { Navigate } from "react-router-dom";
import { cerrarSesion } from "../service/authServices";

const SignOutButton = () => {
  // const { user, deleteUser } = useContext(UserContext);

  const handleClick = () => {
    // deleteUser();

    cerrarSesion();

    window.location.href="/"

    // Validamos si el usuario existe, si no existe se redirige automáticamente la página al login
    // if (!user) {
    //   return <Navigate to="/sign-in" />;
    // }
  };

  return (
    <p className="menu__link" onClick={handleClick}>
      <FontAwesomeIcon
        icon={faRightFromBracket}
        className="icon icon--menu"
      />
      <span>Sign out</span>
    </p>
  );
};

export default SignOutButton;
