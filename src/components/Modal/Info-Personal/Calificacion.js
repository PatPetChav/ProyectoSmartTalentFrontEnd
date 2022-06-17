import React from "react";
//icons
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SmsIcon from '@mui/icons-material/Sms';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AltRouteIcon from '@mui/icons-material/AltRoute';

const Calificacion = ({ applicant, qualifications }) => {
  return (
    <>
      <div className="div">
        <div className="container-icon-title">
          <NoteAltIcon />
          <h4 className="titulo-icon">Calificacion Academica:</h4>
        </div>
        <span>
          {qualifications.calf_academica}
        </span>
      </div>

      <div className="div">
        <div className="container-icon-title">
          <GroupAddIcon />
          <h4 className="titulo-icon">Calificacion Asertividad:</h4>
        </div>
        <span>
          {qualifications.calf_asertividad}
        </span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <AccessibilityNewIcon />
          <h4 className="titulo-icon">Calificacion Autoestima:</h4>
        </div>
        <span>
          {qualifications.calf_autoestima}
        </span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <SmsIcon />
          <h4 className="titulo-icon">Calificacion Comunicacion:</h4>
        </div>
        <span>
          {qualifications.calf_comunicacion}
        </span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <PsychologyIcon />
          <h4 className="titulo-icon">Calificacion Psicologica:</h4>
        </div>
        <span>
          {qualifications.calf_psicologica}
        </span>
      </div>
      <div className="div">
        <div className="container-icon-title">
          <AltRouteIcon />
          <h4 className="titulo-icon">Calificacion Toma de Decision:</h4>
        </div>
        <span>
          {qualifications.calf_tomadecision}
        </span>
      </div>
    </>
  );
};

export default Calificacion;