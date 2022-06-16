// Importando Hooks
import { useContext } from "react";
// Importando Context
import { UserContext } from "../../context/UserContext";
// Importando react-router-dom
import { Navigate, Outlet} from "react-router-dom";

const Private = () => {
  const { user } = useContext(UserContext);

  // Validamos si el usuario existe, si no existe se redirige automáticamente la página al login
  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Private;