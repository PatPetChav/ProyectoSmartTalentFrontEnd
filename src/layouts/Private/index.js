// Importando Hooks
import { useContext, useEffect, useState } from "react";
// Importando Context
import { UserContext } from "../../context/UserContext";
// Importando react-router-dom
import { Navigate, Outlet } from "react-router-dom";
import { estaLogeado } from "../../service/authServices";

const Private = () => {
 
  console.log("Estalogeado",estaLogeado())

  if (!estaLogeado()) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Private;