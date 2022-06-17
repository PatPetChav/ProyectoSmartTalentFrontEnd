import React from "react";
//icons
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import TodayIcon from '@mui/icons-material/Today';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import LanguageIcon from '@mui/icons-material/Language';

const Personal = ({ applicant }) => {
  const date = new Date(`${applicant.fecha_postulacion}`);
  console.log("dia", date.toDateString());
  console.log("applicant modal",applicant);
  return (
    <>
      <div className="div">
        <div className="container-icon-title">
          <LocationCityIcon/>
          <h4 className="titulo-icon">Nombre y Apellido:</h4>
        </div>
        <span>
          {applicant?.postulante_nombre} {applicant?.postulante_apellido}
        </span>
      </div>

      <div className="div">
        <div className="container-icon-title">
          <AssignmentIndIcon />
          <h4  className="titulo-icon">DNI:</h4>
        </div>
        <span>{applicant?.postulante_dni}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <LocationOnIcon />
          <h4  className="titulo-icon">Direccion:</h4>
        </div>
        <span>{applicant?.postulante_direccion}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <LocationCityIcon />
          <h4  className="titulo-icon">Provincia:</h4>
        </div>
        <span>{applicant?.postulante_provincia}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <SouthAmericaIcon />
          <h4  className="titulo-icon">Departamento:</h4>
        </div>
        <span>{applicant?.postulante_departamento}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <PhoneIphoneIcon />
          <h4  className="titulo-icon">Celular</h4>
        </div>
        <span>{applicant?.postulante_celular}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <AlternateEmailIcon />
          <h4  className="titulo-icon">Correo:</h4>
        </div>
        <span>{applicant?.postulante_email}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <ToggleOnIcon />
          <h4  className="titulo-icon"> Estado:</h4>
        </div>
        <span>{applicant?.estado}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <LanguageIcon />
          <h4  className="titulo-icon">Pais:</h4>
        </div>
        <span>{applicant?.postulante_pais}</span>
      </div>
    </>
  );
};

export default Personal;