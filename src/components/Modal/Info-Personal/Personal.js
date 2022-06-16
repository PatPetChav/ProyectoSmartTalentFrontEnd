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
  return (
    <>
      <div className="div">
        <div className="container-icon-title">
          <LocationCityIcon/>
          <h4 className="titulo-icon">Nombre y Apellido:</h4>
        </div>
        <span>
          {applicant?.nombre_postulante} {applicant?.apellido_postulante}
        </span>
      </div>

      <div className="div">
        <div className="container-icon-title">
          <AssignmentIndIcon />
          <h4  className="titulo-icon">DNI:</h4>
        </div>
        <span>{applicant?.dni_postulante}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <LocationOnIcon />
          <h4  className="titulo-icon">Direccion:</h4>
        </div>
        <span>{applicant?.direccion}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <LocationCityIcon />
          <h4  className="titulo-icon">Provincia:</h4>
        </div>
        <span>{applicant?.provincia}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <SouthAmericaIcon />
          <h4  className="titulo-icon">Departamento:</h4>
        </div>
        <span>{applicant?.departamento}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <PhoneIphoneIcon />
          <h4  className="titulo-icon">Celular</h4>
        </div>
        <span>{applicant?.numero_celular}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <LocalPhoneIcon />
          <h4  className="titulo-icon">Telefono:</h4>
        </div>
        <span>{applicant?.telefono_fijo}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <AlternateEmailIcon />
          <h4  className="titulo-icon">Correo:</h4>
        </div>
        <span>{applicant?.correo_electronico}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <ToggleOnIcon />
          <h4  className="titulo-icon"> Estado:</h4>
        </div>
        <span>{applicant?.estado}</span>
      </div>
      {/**<div className="div">
        <div className="container-icon-title">
          <ChildFriendlyIcon />
          <h4  className="titulo-icon">F. nacimiento:</h4>
        </div>
        <span>{applicant.fecha_nacimiento}</span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <TodayIcon />
          <h4  className="titulo-icon">F. postulacion:</h4>
        </div>
        <span>{}</span>
      </div> */}
      <div className="div">
        <div className="container-icon-title">
          <LanguageIcon />
          <h4  className="titulo-icon">Pais:</h4>
        </div>
        <span>{applicant?.pais_nacimiento}</span>
      </div>
    </>
  );
};

export default Personal;